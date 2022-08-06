import developmentJSONKey from './keys/service-key-development.json';
// import productionJSONKey from './keys/service-key-production.json';
const admin = require('firebase-admin');

const firebaseKey = {
	firebaseDevelopmentConfig: {
		apiKey: 'AIzaSyB6zGcc2HvnMHNlGzDZMe81iEaRTR6U_0o',
		authDomain: 'djuli-zp-development.firebaseapp.com',
		projectId: 'djuli-zp-development',
		storageBucket: 'djuli-zp-development.appspot.com',
		messagingSenderId: '285980090587',
		appId: '1:285980090587:web:4d164adf5fc4c83c8cecfe',
		databaseURL: 'https://djuli-zp-development.firebaseio.com',
		credential: admin.credential.cert(developmentJSONKey),
	},

	firebaseProductionConfig: {
		// apiKey: 'AIzaSyB6zGcc2HvnMHNlGzDZMe81iEaRTR6U_0o',
		// authDomain: 'djuli-zp-development.firebaseapp.com',
		// projectId: 'djuli-zp-development',
		// storageBucket: 'djuli-zp-development.appspot.com',
		// messagingSenderId: '285980090587',
		// appId: '1:285980090587:web:4d164adf5fc4c83c8cecfe',
		// databaseURL: 'https://djuli-zp-development.firebaseio.com',
		// credential: admin.credential.cert(firebaseProductionConfig),
	},
};

const devServer = process.env.NODE_ENV!.trim() !== 'production';
const determineServiceAccount = () => {
	if (devServer) {
		return firebaseKey.firebaseDevelopmentConfig;
	} else {
		return firebaseKey.firebaseProductionConfig;
	}
};

export default {
	accountType: determineServiceAccount(),
};
