import { NextFunction, Response, Request } from 'express';

const sendGridMail = require('@sendgrid/mail');
sendGridMail.setApiKey('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');

const getOrderConfirmationEmailHtml = (email: string, link: string) => {
	return `<!doctype html>
<html lang="en-US">

<head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <title>Reset Password Email</title>
    <meta name="description" content="Reset Password Email Template.">
    <style type="text/css">
        a:hover {text-decoration: underline !important;}
    </style>
</head>

<body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: white !important;" leftmargin="0">
    <table cellspacing="0" border="0" cellpadding="0" width="100%"
        style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700);
        background-color: white !important;font-family: 'Open Sans', sans-serif;">
        <tr>
            <td>
                <table style="background-color: white !important; max-width:670px;  margin:0 auto;" width="100%" border="0"
                    align="center" cellpadding="0" cellspacing="0">
                    <tr>
                        <td style="height:80px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td style="text-align:center;">
                          <a href="https://djuli.zimmerpeacock.no" title="logo" target="_blank">
                            <img width="60" src="https://djuli.zimmerpeacock.no/img/djuliImage.614c7ce9.png"  title="logo" alt="logo">
                          </a>
                          <h1 style="font-size: 36px; font-weight: 400; margin: 2;font-size: 24px; font-weight: 400; letter-spacing: 4px; line-height: 16px;">Welcome to Djuli</h1>
                        </td>
                    </tr>
                    <tr>
                        <td style="height:20px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>
                            <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                style="max-width:670px;background:#fff; border-radius:3px; text-align:center;">
                                <tr>
                                    <td style="height:40px;">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td style="padding:0 35px;">
                                        <p style="margin: 0;color:#455056; text-align:justify;font-family:'Rubik',sans-serif; margin-bottom: 10px;">Hi !</p>
                                        <p style="margin: 0;color:#455056; text-align:justify;font-family:'Rubik',sans-serif;">We're happy that you signed up for Djuli. To get you started, you need to confirm your account. Just click the button below.</p>

                                        <span
                                            style="display:inline-block; vertical-align:middle; margin:29px 0 0px; border-bottom:1px solid #cecece; width:100px;"></span>

                                            <p align="center" style="border-radius: 3px;" bgcolor="#5960CC"><a href=${link} target="_blank" style="background:#20e277;text-decoration:none !important; font-weight:400; color:#fff;text-transform:uppercase; padding: 15px 25px; border-radius: 2px; border: 1px solid #20e277; display: inline-block; text-decoration: none !important;">Verify Account</a></p>

                                        <span
                                            style="display:inline-block; vertical-align:middle; margin:0px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                        <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                            If that doesn't work, copy and paste the following link in your browser:
                                        </p>
                                        <p style="margin: 0; text-align=justify; word-break: break-word; font-size:16px; color:#green" >
                                            <a href="${link}"  style="text-decoration:none !important" title="logo" target="_blank">${link}</a></p>

                                    </td>
                                </tr>
                                <tr>
                                    <td style="height:40px;">&nbsp;</td>
                                </tr>
                            </table>
                        </td>
                    <tr>
                        <td style="height:20px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td  align="left" style="font-size: 10px; text-align: justify; padding: 1px 41px 20px 40px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif;">
                            <p>This email and any files transmitted with it are confidential and intended solely for the use of the individual or entity to whom they are addressed.
                             If you have received this email in error, please ignore it and delete this e-mail from your system.. This message contains confidential information and is intended only for the individual named.
                            If you are not the named addressee you should not disseminate, distribute or copy this e-mail.
                              If you are not the intended recipient you are notified that disclosing, copying, distributing or taking any action in reliance on the contents of this information is strictly prohibited.</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align:center;">
                            <p style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">&copy; Djuli [https://djuli.zimmerpeacock.no]</p>
                        </td>
                    </tr>

                    <tr>
                        <td style="height:80px;">&nbsp;</td>
                    </tr>

            </td>
        </tr>
    </table>
</body>

</html>`;
};

const getMessage = () => {
	// const body = 'This is a test email using SendGrid from Node.js';
	return {
		to: 'shashikantpathakk@gmail.com',
		from: 'djuli@zimmerpeacock.com',
		subject: 'Account Verification',
		// text: body,
		html: getOrderConfirmationEmailHtml('shashikantpathakk@gmail.com', 'google.com'),
	};
};

const sendEmail = async (req: Request, res: Response, next: NextFunction) => {
	try {
		await sendGridMail.send(getMessage());

		return res.status(200).send('sent');
	} catch (error: any) {
		return res.status(400).send(error);
	}
};

export default sendEmail;
