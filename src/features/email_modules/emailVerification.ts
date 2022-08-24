import { firebaseFunctions } from '../../database_connection/firebase-functions';
import { EmailVerificationTemplate } from './email_templates_collection/emailVerification.template';
import logger from '../../features/logger_module/winston-logger';
const sendGridMail = require('@sendgrid/mail');
sendGridMail.setApiKey('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');
const senderEmail = 'djuli@zimmerpeacock.com';

export const emailVerification = async (emailId: string, emailSubject: string) => {
	try {
		const link = await firebaseFunctions().firebase.generateEmailVerificationLink(emailId);
		const emailVerificationObject = {
			to: emailId,
			from: senderEmail,
			subject: emailSubject,
			html: EmailVerificationTemplate(link),
		};
		await sendGridMail.send(emailVerificationObject);
		logger.info('Emai sent');
	} catch (error: any) {
		logger.error(error);
		if (error.response.body) {
			throw Error(error.response.body.errors[0].message);
		}
		throw Error(error);
	}
};
