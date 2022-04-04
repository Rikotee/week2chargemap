'use strict';
import express  from 'express';
import dotenv from 'dotenv';
dotenv.config();
import stationRoute from './routes/stationRoute'
import authRoute from './routes/authRoute'
import passport from './utils/pass';
import db from './utils/db';
import bcrypt from 'bcrypt';
const app = express();
const port = process.env.PORT || 3000;

app.use(passport.initialize());

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.get('/', async (req, res) => {
	if(req.secure) {
/* 		const saltRound = 12;
		const pwd1234 = await bcrypt.hash('1234', saltRound);
		console.log('1234 possible hash', pwd1234);
		const pwdQwer = await bcrypt.hash('qwer', saltRound);
		console.log('qwer possible hash', pwdQwer); */
		res.send('Hello secure Chargemap');
	}else{
		res.send('Hello Chargemap');
	};
});
app.use('/station', stationRoute); //passport.authenticate('jwt', {session: false}),
app.use('/auth', authRoute);

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

db.on('connected', () => {
	if (process.env.NODE_ENV === 'production') {
		(async () => (await import('./utils/production')).default(app, port))();
	  } else {
		(async () => (await import('./utils/localhost')).default(app, port))();
	  }
}).on('error', (err) => {
	console.log(`Connection error: ${err.message}`);
});

