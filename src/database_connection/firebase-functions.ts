import configProperty from './connect';
import { initializeApp, getApp, getApps } from 'firebase-admin/app';
import admin from 'firebase-admin';
import logger from '../features/logger_module/winston-logger';

let dataBaseConnectionStatus = false;

export const connectDB = () => {
	try {
		getApps().length === 0 ? initializeApp(configProperty.accountType) : getApp();
		dataBaseConnectionStatus = true;
		logger.info('Connected to Database');
		return true;
	} catch (error) {
		dataBaseConnectionStatus = false;
		logger.error('Failed to connect database');
		return false;
	}
};

export const firebaseFunctions = () => {
	if (dataBaseConnectionStatus) {
		return {
			bucket: admin.storage().bucket(),
			firebase: admin.auth(),
			db: admin.app().firestore(),
		};
	} else {
		throw new Error('Could not connect to database');
	}
};

// export const bucket = admin.storage().bucket();

// export const firebase = admin.auth();

// export const db = admin.app().firestore();

// const storageDownloadUrl = (imgPath, generatedToken) => {
// 	const urlStorage = 'https://firebasestorage.googleapis.com/v0/b/';
// 	const fileUrl = `${urlStorage}${config.storageBucket}/o/${imgPath}?alt=media&token=${generatedToken}`;
// 	return fileUrl;
// };
