'use strict';
import express  from 'express';
import dotenv from 'dotenv';
dotenv.config();
import https from 'https';
import fs from 'fs';
import stationRoute from './routes/stationRoute'
import authRoute from './routes/authRoute'
import passport from './utils/pass';
import db from './utils/db';
const app = express();
const port = process.env.PORT || 3000;

const sslkey = fs.readFileSync('ssl-key.pem');
const sslcert = fs.readFileSync('ssl-cert.pem')

const options = {
      key: sslkey,
      cert: sslcert
};

app.use(passport.initialize());

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.get('/', (req, res) => {
	if(req.secure) {
		res.send('Hello secure Chargemap');
	}else{
		res.send('Hello Chargemap');
	};
});
app.use('/station', stationRoute); //passport.authenticate('jwt', {session: false}),
app.use('/auth', authRoute);

db.on('connected', () => {
	// app.listen(port, () => console.log(`Example app listening on port ${port}!`));
	https.createServer(options, app).listen(8000);
}).on('error', (err) => {
	console.log(`Connection error: ${err.message}`);
});

