import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

(async () => {
	try {
		const DATABASE_NAME = process.env.DATABASE_NAME || 'chargemap';
		mongoose.connect(process.env.DB_URL, {
			dbName: DATABASE_NAME,
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('DB connected successfully');
	} catch (e) {
		console.error('Connection to db failed: ', e);
	}
})();

export default mongoose.connection;
