'use strict';
import express  from 'express';
import dotenv from 'dotenv';
dotenv.config();
import stationRoute from './routes/stationRoute'
import authRoute from './routes/authRoute'
import passport from './utils/pass';
import db from './utils/db';
const app = express();
const port = process.env.PORT || 3000;

app.use(passport.initialize());

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.get('/', (req, res) => {
	res.send('Hello Chargemap');
});
app.use('/station', stationRoute); //passport.authenticate('jwt', {session: false}),
app.use('/auth', authRoute);

db.on('connected', () => {
	app.listen(port, () => console.log(`Example app listening on port ${port}!`));
}).on('error', (err) => {
	console.log(`Connection error: ${err.message}`);
});

