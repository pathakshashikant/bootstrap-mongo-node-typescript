import logger from '../logger_module/winston-logger';
import mongoose from 'mongoose';
const connect: any = async () => {
	// This should be either put in .env file or pm2 environment ecosystem file or we can use config module to store secrets.
	// Used here for simplicity so you can replace the db instance with your one local mongo instance and test the services
	const databaseUrl = 'mongodb://skyfri:skyfri@0.0.0.0:27000';

	try {
		await mongoose.connect(databaseUrl);
		logger.info('Connected');
	} catch (err) {
		logger.error(`Disconnected: Error message :${err}`);
	}
};

export default connect;
