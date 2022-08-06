'use strict';
const { version } = require('./package.json');

const options = {
	definition: {
		openapi: '3.0.1',
		info: {
			title: 'Djuli API',
			description: 'Data analysis tool build upon matured Machine Learning Algorithm used to extract meaningful value from your electrochemical sensors data.',
			termsOfService: 'https://djuli.zimmerpeacock.no/terms-conditions',
			contact: {
				email: 'sindre@zimmerpeacock.com'
			},
			version
		},
		'externalDocs': {
			'description': 'Find out more about Djuli',
			'url': 'https://djuli.zimmerpeacock.no/'
		},

		components: {
			securitySchemes: {
				bearerAuth: {
					type: 'http',
					scheme: 'bearer',
					bearerFormat: 'JWT'
				}
			}
		},
		servers: [
			{
				url: 'https://feature-extraction-value-zu3hsmhdza-nw.a.run.app',
				description: 'Staging server for testing',
			}
		],
		// servers: [
		//   {
		//     url: `http://feature-extraction-value-zu3hsmhdza-nw.a.run.app`,
		//     description: "Staging server for testing",
		//   }
		// ],
		'tags': [
			{
				'name': 'Healthcheck',
				'description': 'The authenticated token generator for subsequent requests to be made',
				'externalDocs': {
					'description': 'Find out more',
					'url': 'https://djuli.zimmerpeacock.no/'
				}
			},
			{
				'name': 'Users',
				'description': 'The authenticated token generator for subsequent requests to be made.'
			},
			{
				'name': 'ProcessedData',
				'description': 'The API returns the entity list owned and have access to user.',
				'externalDocs': {
					'description': 'Find out more',
					'url': 'https://djuli.zimmerpeacock.no/'
				}
			}
		],
	},
	apis: ['./routes/*.js', './extracted_features/*.js']
};


module.exports = options;
