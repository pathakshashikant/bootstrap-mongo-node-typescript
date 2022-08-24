/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/bin/www.ts":
/*!************************!*\
  !*** ./src/bin/www.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst http = __importStar(__webpack_require__(/*! http */ \"http\"));\r\nconst winston_logger_1 = __importDefault(__webpack_require__(/*! ../features/logger_module/winston-logger */ \"./src/features/logger_module/winston-logger.ts\"));\r\nconst index_1 = __importDefault(__webpack_require__(/*! ../index */ \"./src/index.ts\"));\r\nconst firebase_functions_1 = __webpack_require__(/*! ../database_connection/firebase-functions */ \"./src/database_connection/firebase-functions.ts\");\r\nconst server = http.createServer(index_1.default);\r\nfunction normalizePort(val) {\r\n    const normolizedPort = typeof val === 'string' ? parseInt(val, 10) : val;\r\n    if (isNaN(normolizedPort)) {\r\n        return val;\r\n    }\r\n    if (normolizedPort >= 0) {\r\n        return normolizedPort;\r\n    }\r\n    return false;\r\n}\r\nconst port = normalizePort(process.env.PORT || 3000);\r\nindex_1.default.set('port', port);\r\n// eslint-disable-next-line no-undef\r\nconst onError = (error) => {\r\n    if (error.syscall !== 'listen') {\r\n        throw error;\r\n    }\r\n    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;\r\n    switch (error.code) {\r\n        case 'EACCES':\r\n            winston_logger_1.default.error(`${bind} requires elevated privileges`);\r\n            break;\r\n        // process.exit(1);\r\n        case 'EADDRINUSE':\r\n            winston_logger_1.default.error(`${bind} is already in use`);\r\n            break;\r\n        default:\r\n            throw error;\r\n    }\r\n    process.exit(1);\r\n};\r\nconst onListening = () => __awaiter(void 0, void 0, void 0, function* () {\r\n    const addr = server.address();\r\n    const bind = typeof addr === 'string' ? `pipe ${addr}` : `${addr.port}`;\r\n    winston_logger_1.default.info(`Server is listening at http://localhost:${bind}`);\r\n    (0, firebase_functions_1.connectDB)();\r\n});\r\nserver.listen(port);\r\nserver.on('error', onError);\r\nserver.on('listening', onListening);\r\n\n\n//# sourceURL=webpack://typescript-djuli/./src/bin/www.ts?");

/***/ }),

/***/ "./src/constants/default.ts":
/*!**********************************!*\
  !*** ./src/constants/default.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports[\"default\"] = {\r\n    collectionName: {\r\n        users: 'users',\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack://typescript-djuli/./src/constants/default.ts?");

/***/ }),

/***/ "./src/controller/user_controller/user.controller.ts":
/*!***********************************************************!*\
  !*** ./src/controller/user_controller/user.controller.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.createPersonalUserHandler = exports.listAllUsersHandler = void 0;\r\nconst user_service_1 = __webpack_require__(/*! ../../service/user_service/user.service */ \"./src/service/user_service/user.service.ts\");\r\nconst winston_logger_1 = __importDefault(__webpack_require__(/*! ../../features/logger_module/winston-logger */ \"./src/features/logger_module/winston-logger.ts\"));\r\nconst listAllUsersHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {\r\n    try {\r\n        const user = yield (0, user_service_1.listAllUsers)();\r\n        return res.status(200).json(user);\r\n    }\r\n    catch (e) {\r\n        winston_logger_1.default.error(e);\r\n        return res.status(400).send(e.message);\r\n    }\r\n});\r\nexports.listAllUsersHandler = listAllUsersHandler;\r\nfunction createPersonalUserHandler(req, res, next) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        try {\r\n            const user = yield (0, user_service_1.createPersonalUserAccount)(req.body);\r\n            return res.send(user);\r\n        }\r\n        catch (e) {\r\n            winston_logger_1.default.error(e);\r\n            next(e);\r\n        }\r\n    });\r\n}\r\nexports.createPersonalUserHandler = createPersonalUserHandler;\r\n\n\n//# sourceURL=webpack://typescript-djuli/./src/controller/user_controller/user.controller.ts?");

/***/ }),

/***/ "./src/database_connection/connect.ts":
/*!********************************************!*\
  !*** ./src/database_connection/connect.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst service_key_development_json_1 = __importDefault(__webpack_require__(/*! ./keys/service-key-development.json */ \"./src/database_connection/keys/service-key-development.json\"));\r\n// import productionJSONKey from './keys/service-key-production.json';\r\nconst admin = __webpack_require__(/*! firebase-admin */ \"firebase-admin\");\r\nconst firebaseKey = {\r\n    firebaseDevelopmentConfig: {\r\n        apiKey: 'AIzaSyB6zGcc2HvnMHNlGzDZMe81iEaRTR6U_0o',\r\n        authDomain: 'djuli-zp-development.firebaseapp.com',\r\n        projectId: 'djuli-zp-development',\r\n        storageBucket: 'djuli-zp-development.appspot.com',\r\n        messagingSenderId: '285980090587',\r\n        appId: '1:285980090587:web:4d164adf5fc4c83c8cecfe',\r\n        databaseURL: 'https://djuli-zp-development.firebaseio.com',\r\n        credential: admin.credential.cert(service_key_development_json_1.default),\r\n    },\r\n    firebaseProductionConfig: {\r\n    // apiKey: 'AIzaSyB6zGcc2HvnMHNlGzDZMe81iEaRTR6U_0o',\r\n    // authDomain: 'djuli-zp-development.firebaseapp.com',\r\n    // projectId: 'djuli-zp-development',\r\n    // storageBucket: 'djuli-zp-development.appspot.com',\r\n    // messagingSenderId: '285980090587',\r\n    // appId: '1:285980090587:web:4d164adf5fc4c83c8cecfe',\r\n    // databaseURL: 'https://djuli-zp-development.firebaseio.com',\r\n    // credential: admin.credential.cert(firebaseProductionConfig),\r\n    },\r\n};\r\nconst devServer = \"development\".trim() !== 'production';\r\nconst determineServiceAccount = () => {\r\n    if (devServer) {\r\n        return firebaseKey.firebaseDevelopmentConfig;\r\n    }\r\n    else {\r\n        return firebaseKey.firebaseProductionConfig;\r\n    }\r\n};\r\nexports[\"default\"] = {\r\n    accountType: determineServiceAccount(),\r\n};\r\n\n\n//# sourceURL=webpack://typescript-djuli/./src/database_connection/connect.ts?");

/***/ }),

/***/ "./src/database_connection/firebase-functions.ts":
/*!*******************************************************!*\
  !*** ./src/database_connection/firebase-functions.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.firebaseFunctions = exports.connectDB = void 0;\r\nconst connect_1 = __importDefault(__webpack_require__(/*! ./connect */ \"./src/database_connection/connect.ts\"));\r\nconst app_1 = __webpack_require__(/*! firebase-admin/app */ \"firebase-admin/app\");\r\nconst firebase_admin_1 = __importDefault(__webpack_require__(/*! firebase-admin */ \"firebase-admin\"));\r\nconst winston_logger_1 = __importDefault(__webpack_require__(/*! ../features/logger_module/winston-logger */ \"./src/features/logger_module/winston-logger.ts\"));\r\nlet dataBaseConnectionStatus = false;\r\nconst connectDB = () => {\r\n    try {\r\n        (0, app_1.getApps)().length === 0 ? (0, app_1.initializeApp)(connect_1.default.accountType) : (0, app_1.getApp)();\r\n        dataBaseConnectionStatus = true;\r\n        winston_logger_1.default.info('Connected to Database');\r\n        return true;\r\n    }\r\n    catch (error) {\r\n        dataBaseConnectionStatus = false;\r\n        winston_logger_1.default.error('Failed to connect database');\r\n        return false;\r\n    }\r\n};\r\nexports.connectDB = connectDB;\r\nconst firebaseFunctions = () => {\r\n    if (dataBaseConnectionStatus) {\r\n        return {\r\n            bucket: firebase_admin_1.default.storage().bucket(),\r\n            firebase: firebase_admin_1.default.auth(),\r\n            db: firebase_admin_1.default.app().firestore(),\r\n        };\r\n    }\r\n    else {\r\n        throw new Error('Could not connect to database');\r\n    }\r\n};\r\nexports.firebaseFunctions = firebaseFunctions;\r\n// export const bucket = admin.storage().bucket();\r\n// export const firebase = admin.auth();\r\n// export const db = admin.app().firestore();\r\n// const storageDownloadUrl = (imgPath, generatedToken) => {\r\n// \tconst urlStorage = 'https://firebasestorage.googleapis.com/v0/b/';\r\n// \tconst fileUrl = `${urlStorage}${config.storageBucket}/o/${imgPath}?alt=media&token=${generatedToken}`;\r\n// \treturn fileUrl;\r\n// };\r\n\n\n//# sourceURL=webpack://typescript-djuli/./src/database_connection/firebase-functions.ts?");

/***/ }),

/***/ "./src/errorhandler/handler.error.ts":
/*!*******************************************!*\
  !*** ./src/errorhandler/handler.error.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.notAvailableRouteErrorHandler = exports.errorHandler = void 0;\r\nconst errorHandler = (error, req, res, next) => {\r\n    var _a;\r\n    if (res.headersSent) {\r\n        next(error);\r\n    }\r\n    else {\r\n        res.status(500).json(Object.assign({ message: error.message }, (((_a = \"development\") === null || _a === void 0 ? void 0 : _a.trim()) === 'production' ? null : { err: error.stack })));\r\n    }\r\n};\r\nexports.errorHandler = errorHandler;\r\nconst notAvailableRouteErrorHandler = (req, res) => {\r\n    res.status(404);\r\n    res.json({\r\n        success: true,\r\n        message: 'Please check your route path and make sure it exist..',\r\n    });\r\n};\r\nexports.notAvailableRouteErrorHandler = notAvailableRouteErrorHandler;\r\n\n\n//# sourceURL=webpack://typescript-djuli/./src/errorhandler/handler.error.ts?");

/***/ }),

/***/ "./src/features/email_modules/emailVerification.ts":
/*!*********************************************************!*\
  !*** ./src/features/email_modules/emailVerification.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.emailVerification = void 0;\r\nconst firebase_functions_1 = __webpack_require__(/*! ../../database_connection/firebase-functions */ \"./src/database_connection/firebase-functions.ts\");\r\nconst emailVerification_template_1 = __webpack_require__(/*! ./email_templates_collection/emailVerification.template */ \"./src/features/email_modules/email_templates_collection/emailVerification.template.ts\");\r\nconst winston_logger_1 = __importDefault(__webpack_require__(/*! ../../features/logger_module/winston-logger */ \"./src/features/logger_module/winston-logger.ts\"));\r\nconst sendGridMail = __webpack_require__(/*! @sendgrid/mail */ \"@sendgrid/mail\");\r\nsendGridMail.setApiKey(process.env.SENDGRID_API_KEY || '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');\r\nconst senderEmail = process.env.SENDER_EMAIL || 'djuli@zimmerpeacock.com';\r\nconst emailVerification = (emailId, emailSubject) => __awaiter(void 0, void 0, void 0, function* () {\r\n    try {\r\n        const link = yield (0, firebase_functions_1.firebaseFunctions)().firebase.generateEmailVerificationLink(emailId);\r\n        const emailVerificationObject = {\r\n            to: emailId,\r\n            from: senderEmail,\r\n            subject: emailSubject,\r\n            html: (0, emailVerification_template_1.EmailVerificationTemplate)(link),\r\n        };\r\n        yield sendGridMail.send(emailVerificationObject);\r\n    }\r\n    catch (error) {\r\n        winston_logger_1.default.error(error);\r\n        if (error.response.body) {\r\n            throw Error(error.response.body.errors[0].message);\r\n        }\r\n        throw Error(error);\r\n    }\r\n});\r\nexports.emailVerification = emailVerification;\r\n\n\n//# sourceURL=webpack://typescript-djuli/./src/features/email_modules/emailVerification.ts?");

/***/ }),

/***/ "./src/features/email_modules/email_templates_collection/emailVerification.template.ts":
/*!*********************************************************************************************!*\
  !*** ./src/features/email_modules/email_templates_collection/emailVerification.template.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.EmailVerificationTemplate = void 0;\r\nconst EmailVerificationTemplate = (link) => {\r\n    return `<!doctype html>\n<html lang=\"en-US\">\n\n<head>\n    <meta content=\"text/html; charset=utf-8\" http-equiv=\"Content-Type\" />\n    <title>Accout Verification</title>\n    <meta name=\"description\" content=\"Accout Verification\">\n    <style type=\"text/css\">\n        a:hover {text-decoration: underline !important;}\n    </style>\n</head>\n\n<body marginheight=\"0\" topmargin=\"0\" marginwidth=\"0\" style=\"margin: 0px; background-color: white !important;\" leftmargin=\"0\">\n    <table cellspacing=\"0\" border=\"0\" cellpadding=\"0\" width=\"100%\"\n        style=\"@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700);\n        background-color: white !important;font-family: 'Open Sans', sans-serif;\">\n        <tr>\n            <td>\n                <table style=\"background-color: white !important; max-width:670px;  margin:0 auto;\" width=\"100%\" border=\"0\"\n                    align=\"center\" cellpadding=\"0\" cellspacing=\"0\">\n                    <tr>\n                        <td style=\"height:80px;\">&nbsp;</td>\n                    </tr>\n                    <tr>\n                        <td style=\"text-align:center;\">\n                          <a href=\"https://djuli.zimmerpeacock.no\" title=\"logo\" target=\"_blank\">\n                            <img width=\"60\" src=\"https://djuli.zimmerpeacock.no/img/djuliImage.614c7ce9.png\"  title=\"logo\" alt=\"logo\">\n                          </a>\n                          <h1 style=\"font-size: 36px; font-weight: 400; margin: 2;font-size: 24px; font-weight: 400; letter-spacing: 4px; line-height: 16px;\">Welcome to Djuli</h1>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td style=\"height:20px;\">&nbsp;</td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <table width=\"95%\" border=\"0\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\"\n                                style=\"max-width:670px;background:#fff; border-radius:3px; text-align:center;\">\n                                <tr>\n                                    <td style=\"height:40px;\">&nbsp;</td>\n                                </tr>\n                                <tr>\n                                    <td style=\"padding:0 35px;\">\n                                        <p style=\"margin: 0;color:#455056; text-align:justify;font-family:'Rubik',sans-serif; margin-bottom: 10px;\">Hi !</p>\n                                        <p style=\"margin: 0;color:#455056; text-align:justify;font-family:'Rubik',sans-serif;\">We're happy that you signed up for Djuli. To get you started, you need to confirm your account. Just click the button below.</p>\n\n                                        <span\n                                            style=\"display:inline-block; vertical-align:middle; margin:29px 0 0px; border-bottom:1px solid #cecece; width:100px;\"></span>\n\n                                            <p align=\"center\" style=\"border-radius: 3px;\" bgcolor=\"#5960CC\"><a href=${link} target=\"_blank\" style=\"background:#20e277;text-decoration:none !important; font-weight:400; color:#fff;text-transform:uppercase; padding: 15px 25px; border-radius: 2px; border: 1px solid #20e277; display: inline-block; text-decoration: none !important;\">Verify Account</a></p>\n\n                                        <span\n                                            style=\"display:inline-block; vertical-align:middle; margin:0px 0 26px; border-bottom:1px solid #cecece; width:100px;\"></span>\n                                        <p style=\"color:#455056; font-size:15px;line-height:24px; margin:0;\">\n                                            If that doesn't work, copy and paste the following link in your browser:\n                                        </p>\n                                        <p style=\"margin: 0; text-align=justify; word-break: break-word; font-size:16px; color:#green\" >\n                                            <a href=\"${link}\"  style=\"text-decoration:none !important\" title=\"logo\" target=\"_blank\">${link}</a></p>\n\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td style=\"height:40px;\">&nbsp;</td>\n                                </tr>\n                            </table>\n                        </td>\n                    <tr>\n                        <td style=\"height:20px;\">&nbsp;</td>\n                    </tr>\n                    <tr>\n                        <td  align=\"left\" style=\"font-size: 10px; text-align: justify; padding: 1px 41px 20px 40px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif;\">\n                            <p>This email and any files transmitted with it are confidential and intended solely for the use of the individual or entity to whom they are addressed.\n                             If you have received this email in error, please ignore it and delete this e-mail from your system.. This message contains confidential information and is intended only for the individual named.\n                            If you are not the named addressee you should not disseminate, distribute or copy this e-mail.\n                              If you are not the intended recipient you are notified that disclosing, copying, distributing or taking any action in reliance on the contents of this information is strictly prohibited.</p>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td style=\"text-align:center;\">\n                            <p style=\"font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;\">&copy; Djuli [https://djuli.zimmerpeacock.no]</p>\n                        </td>\n                    </tr>\n\n                    <tr>\n                        <td style=\"height:80px;\">&nbsp;</td>\n                    </tr>\n\n            </td>\n        </tr>\n    </table>\n</body>\n\n</html>`;\r\n};\r\nexports.EmailVerificationTemplate = EmailVerificationTemplate;\r\n\n\n//# sourceURL=webpack://typescript-djuli/./src/features/email_modules/email_templates_collection/emailVerification.template.ts?");

/***/ }),

/***/ "./src/features/logger_module/winston-logger.ts":
/*!******************************************************!*\
  !*** ./src/features/logger_module/winston-logger.ts ***!
  \******************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst { createLogger, transports, format } = __webpack_require__(/*! winston */ \"winston\");\r\nconst defaultLevel = process.env.LOG_LEVEL || 'info';\r\nconst defaultOptions = {\r\n    exitOnError: false,\r\n    level: defaultLevel,\r\n};\r\nconst options = {\r\n    transports: [new transports.Console()],\r\n    format: format.combine(format.colorize({ all: true }), format.simple()),\r\n};\r\nlet loggerOptions = {};\r\nif (\"development\".trim() === 'development') {\r\n    loggerOptions = Object.assign(Object.assign({}, defaultOptions), options);\r\n}\r\nconst logger = (module.exports = createLogger(loggerOptions));\r\nexports[\"default\"] = logger;\r\n\n\n//# sourceURL=webpack://typescript-djuli/./src/features/logger_module/winston-logger.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nconst cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\r\nconst service_routes_1 = __importDefault(__webpack_require__(/*! ./routers/users_routers/service.routes */ \"./src/routers/users_routers/service.routes.ts\"));\r\nconst handler_error_1 = __webpack_require__(/*! ./errorhandler/handler.error */ \"./src/errorhandler/handler.error.ts\");\r\nconst app = (0, express_1.default)();\r\napp.use((0, cors_1.default)());\r\napp.use(express_1.default.json({\r\n    verify: (req, res, buffer) => (req.body = buffer),\r\n    limit: '3000mb',\r\n}));\r\napp.use(express_1.default.urlencoded({ limit: '3000mb', extended: true }));\r\napp.use('/api/v1/', service_routes_1.default);\r\napp.use(handler_error_1.errorHandler);\r\napp.use(handler_error_1.notAvailableRouteErrorHandler);\r\nexports[\"default\"] = app;\r\n\n\n//# sourceURL=webpack://typescript-djuli/./src/index.ts?");

/***/ }),

/***/ "./src/middleware/validateResource.ts":
/*!********************************************!*\
  !*** ./src/middleware/validateResource.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.validateRequestInput = void 0;\r\nconst validate = (schema) => (req, res, next) => {\r\n    try {\r\n        schema.parse({\r\n            body: req.body,\r\n            query: req.query,\r\n            params: req.params,\r\n        });\r\n        next();\r\n    }\r\n    catch (e) {\r\n        const errorList = [];\r\n        for (const err of e.errors) {\r\n            const errorObject = {\r\n                field: err.validation || err.path[1] || 'input',\r\n                message: err.message,\r\n                code: err.code,\r\n            };\r\n            errorList.push(errorObject);\r\n        }\r\n        return res.status(400).send(errorList);\r\n    }\r\n};\r\nconst validateRequestInput = () => (req, res, next) => {\r\n    try {\r\n        next();\r\n    }\r\n    catch (e) {\r\n        return res.status(400).send(e.errors);\r\n    }\r\n};\r\nexports.validateRequestInput = validateRequestInput;\r\nexports[\"default\"] = validate;\r\n\n\n//# sourceURL=webpack://typescript-djuli/./src/middleware/validateResource.ts?");

/***/ }),

/***/ "./src/routers/users_routers/service.routes.ts":
/*!*****************************************************!*\
  !*** ./src/routers/users_routers/service.routes.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst express_1 = __webpack_require__(/*! express */ \"express\");\r\nconst validateResource_1 = __importDefault(__webpack_require__(/*! ../../middleware/validateResource */ \"./src/middleware/validateResource.ts\"));\r\nconst user_controller_1 = __webpack_require__(/*! ../../controller/user_controller/user.controller */ \"./src/controller/user_controller/user.controller.ts\");\r\nconst user_schema_1 = __webpack_require__(/*! ../../schema/user_schema/user.schema */ \"./src/schema/user_schema/user.schema.ts\");\r\nconst router = (0, express_1.Router)();\r\nrouter.get('/', (req, res) => res.sendStatus(200));\r\nrouter.get('/listAllUsers', user_controller_1.listAllUsersHandler);\r\nrouter.post('/createUserAccount', (0, validateResource_1.default)(user_schema_1.personalUserSchema), user_controller_1.createPersonalUserHandler);\r\nexports[\"default\"] = router;\r\n\n\n//# sourceURL=webpack://typescript-djuli/./src/routers/users_routers/service.routes.ts?");

/***/ }),

/***/ "./src/schema/user_schema/user.schema.ts":
/*!***********************************************!*\
  !*** ./src/schema/user_schema/user.schema.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.studentUserTypeSchema = exports.businessUserSchema = exports.personalUserSchema = void 0;\r\nconst z = __importStar(__webpack_require__(/*! zod */ \"zod\"));\r\nconst zod_1 = __webpack_require__(/*! zod */ \"zod\");\r\nconst genderValues = ['Male', 'Female', 'Other', 'Not specified'];\r\nconst typeOfUserValues = ['individual', 'company', 'student', 'client'];\r\nexports.personalUserSchema = (0, zod_1.object)({\r\n    body: (0, zod_1.object)({\r\n        accountStatus: (0, zod_1.string)().default('active'),\r\n        isZPClient: (0, zod_1.boolean)().default(false),\r\n        isZPEmployee: (0, zod_1.boolean)().default(false),\r\n        isWhiteListedUser: (0, zod_1.boolean)().default(false),\r\n        displayName: (0, zod_1.string)({\r\n            required_error: 'Display Name is required',\r\n        }).min(3, 'Name must be greater than 3'),\r\n        email: (0, zod_1.string)({\r\n            required_error: 'Email is required',\r\n        }).email('Not a valid email'),\r\n        password: (0, zod_1.string)({\r\n            required_error: 'Name is required',\r\n        }).min(6, 'Password too short - should be 6 chars minimum'),\r\n        termsAndConditions: (0, zod_1.boolean)({ required_error: 'User must accept terms and conditions' }),\r\n        isOptedForNewsLetters: (0, zod_1.boolean)().default(true),\r\n        gender: z.enum(genderValues).default('Not specified'),\r\n        phoneNumber: (0, zod_1.string)()\r\n            .regex(/^\\+[1-9]\\d{8,14}$/, 'Not a valid phone number')\r\n            .optional(),\r\n        typeOfUser: z.enum(typeOfUserValues).default('individual'),\r\n        dateOfBirth: (0, zod_1.date)().optional(),\r\n        fullAddress: (0, zod_1.string)().optional(),\r\n    }).strict(),\r\n});\r\nexports.businessUserSchema = (0, zod_1.object)({\r\n    body: (0, zod_1.object)({\r\n        jobDesignation: (0, zod_1.string)().default(''),\r\n    }).strict(),\r\n});\r\nexports.studentUserTypeSchema = (0, zod_1.object)({\r\n    body: (0, zod_1.object)({\r\n        universityName: (0, zod_1.string)({\r\n            required_error: 'University Name is missing',\r\n        }),\r\n        studentId: (0, zod_1.string)({\r\n            required_error: 'Student ID is missing',\r\n        }),\r\n    }).strict(),\r\n});\r\n\n\n//# sourceURL=webpack://typescript-djuli/./src/schema/user_schema/user.schema.ts?");

/***/ }),

/***/ "./src/service/user_service/user.service.ts":
/*!**************************************************!*\
  !*** ./src/service/user_service/user.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.createPersonalUserAccount = exports.listAllUsers = void 0;\r\nconst winston_logger_1 = __importDefault(__webpack_require__(/*! ../../features/logger_module/winston-logger */ \"./src/features/logger_module/winston-logger.ts\"));\r\nconst default_1 = __importDefault(__webpack_require__(/*! ../../constants/default */ \"./src/constants/default.ts\"));\r\nconst firebase_functions_1 = __webpack_require__(/*! ../../database_connection/firebase-functions */ \"./src/database_connection/firebase-functions.ts\");\r\nconst lodash_1 = __importDefault(__webpack_require__(/*! lodash */ \"lodash\"));\r\nconst emailVerification_1 = __webpack_require__(/*! ../../features/email_modules/emailVerification */ \"./src/features/email_modules/emailVerification.ts\");\r\nconst listAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {\r\n    try {\r\n        const usersRef = (0, firebase_functions_1.firebaseFunctions)().db.collection(default_1.default.collectionName.users);\r\n        const snapshot = yield usersRef.get();\r\n        const list = [];\r\n        snapshot.forEach((doc) => {\r\n            list.push({\r\n                [doc.id]: doc.data(),\r\n            });\r\n        });\r\n        winston_logger_1.default.info('All user data is fecthed');\r\n        return list;\r\n    }\r\n    catch (e) {\r\n        throw new Error(e);\r\n    }\r\n});\r\nexports.listAllUsers = listAllUsers;\r\nfunction createPersonalUserAccount(input) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        try {\r\n            const defaultValues = {\r\n                isZPClient: false,\r\n                isZPEmployee: false,\r\n                isWhiteListedUser: false,\r\n                isOptedForNewsLetters: false,\r\n                gender: 'Not specified',\r\n                typeOfUser: 'Individual',\r\n            };\r\n            const queryResponse = yield (0, firebase_functions_1.firebaseFunctions)().firebase.createUser(input);\r\n            winston_logger_1.default.info('Individual user account is created');\r\n            yield (0, firebase_functions_1.firebaseFunctions)().firebase.setCustomUserClaims(queryResponse.uid, {\r\n                role: 'basic',\r\n                typeOfUser: 'Individual',\r\n            });\r\n            winston_logger_1.default.info('Custom role of \"basic\" is assigned to user');\r\n            const welcomeMessage = 'Welcome to Djuli, please verify your email address';\r\n            yield (0, emailVerification_1.emailVerification)(queryResponse.email, welcomeMessage);\r\n            winston_logger_1.default.info('Verification Email Sent');\r\n            const accountCreatedResponseData = {\r\n                createdAt: queryResponse.metadata.creationTime,\r\n                lastSignInTime: queryResponse.metadata.lastSignInTime,\r\n                emailVerified: queryResponse.emailVerified,\r\n                phoneNumber: queryResponse.phoneNumber || null,\r\n                customClaims: queryResponse.customClaims || null,\r\n                photoURL: queryResponse.photoURL || null,\r\n                accountStatus: queryResponse.disabled,\r\n                uid: queryResponse.uid,\r\n            };\r\n            console.log(queryResponse.uid);\r\n            const userData = Object.assign(Object.assign(Object.assign({}, accountCreatedResponseData), defaultValues), input);\r\n            try {\r\n                yield (0, firebase_functions_1.firebaseFunctions)().db.doc(`/users/${queryResponse.uid}`).set(userData);\r\n            }\r\n            catch (err) {\r\n                return err;\r\n            }\r\n            // await firebaseFunctions().db.doc(`/${constant.collectionName.users}/${queryResponse.uid}`).set(userData);\r\n            winston_logger_1.default.info('User data instance in the database created');\r\n            return lodash_1.default.omit(userData, ['password']);\r\n        }\r\n        catch (e) {\r\n            throw new Error(e);\r\n        }\r\n    });\r\n}\r\nexports.createPersonalUserAccount = createPersonalUserAccount;\r\n\n\n//# sourceURL=webpack://typescript-djuli/./src/service/user_service/user.service.ts?");

/***/ }),

/***/ "@sendgrid/mail":
/*!*********************************!*\
  !*** external "@sendgrid/mail" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sendgrid/mail");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("firebase-admin");

/***/ }),

/***/ "firebase-admin/app":
/*!*************************************!*\
  !*** external "firebase-admin/app" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("firebase-admin/app");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("winston");

/***/ }),

/***/ "zod":
/*!**********************!*\
  !*** external "zod" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("zod");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "./src/database_connection/keys/service-key-development.json":
/*!*******************************************************************!*\
  !*** ./src/database_connection/keys/service-key-development.json ***!
  \*******************************************************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"type\":\"service_account\",\"project_id\":\"djuli-zp-development\",\"private_key_id\":\"16f2583d0a141d71f55d1df8f9b967252b26724d\",\"private_key\":\"-----BEGIN PRIVATE KEY-----\\\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDSqnOX6mA4Vtr9\\\\nG4xpHFI8cUupa/Na6DQ2+SAHcgUol7cce45IYfdEd5JI+DpHgPEqU4nMDy/C8SaL\\\\nDtEX5nbrdLD10kEBkYTBGxZY3+BIbeLp2UVuFE/zFKtHuMQ5LDTjma7XsZ1sdvNq\\\\n6q2b4O8VoufjOm9Q57ycASaXTbHcDOZXWx2s2ONnZwCIIMzYMgat549GCYaBlcX7\\\\n2D/R/ONaV+oUApvbyc9R34NLVf+zq0XAk9wTg4Qruvej1Z3sgHrVNOXMD7q4pii/\\\\njzyLafwUYG2+fsmYkT3Z/w5nDbDjaUOznAqAXkGOC1MPYLWMtfm+RlEoUQQSRL/d\\\\noPVws16xAgMBAAECggEAJH1dTd5NQdz7jBVyPf+nl+wY6rT131RyvOXsgBWmIpia\\\\n4U5egBel/KBIgKasc5e4TjhPmT61K2tZXYNYwO7MwO6Cu2WqmGK0D73JImZO40TT\\\\nZeWaQt22VnjJTUBKDswjMhw73oUXq0K0WZviK+qrhwAjcea8gtNNBmmlnVYaHW73\\\\nIJRMPHPsxcD4avZ5qJVrpVaK9+g7EgszqNL4/dHxxQF1x3X0/DmBYHepv8vWAX2K\\\\nZVZrFhwH2xQr8sH1gTOfci2s8Apgx5rAw6gUCpnrStoER7MFc4wluRwz7wDv9k8r\\\\nRBSFobHnDzdtqbJblsxxltuCOp1kZMM21GiuIEzaRQKBgQDose+Xiz9MExsOY83i\\\\nlo8W5USdCJmQft6gyD/120adyQdq3pcpap0jWrriWeTOulsXu+0OYsIIk/rpg3YZ\\\\nHxh0+TOek2UCffhO7CiYks2Sl1pod5Nn7CN7gBkPg/JFPEu5roc4bQSxBq643Fvc\\\\n60SqaG77+5fvBb3tPPg3yKUS/QKBgQDnw7Vfj/gtvo3k5PNgzwtfn1zjcoCcNaoi\\\\nVM4EQAo5QW55CueW0E7/pMilqynxq3shv0l+CxKACeIYoDV6B8XKACzM1xzkIFOr\\\\nh4eYXrPycZap3WwGD9KZIG7ZVvgD6mJB/XazdPgizpR1r3mcpUDK7ZsBWQATDiXf\\\\nFDO1ZbtqxQKBgQDW1tH6/NloB4vHcWY5egCKhwseYT5HJputnrVO7TD5pQ1wIis2\\\\nVfTXG4HIUm7qXyyTcTKhQZUcDmRvDK0Q7KDL/vklw7hS4LNNSsUAeSnL2mniYeR6\\\\n4o6wC8kXhh88xTq1KOo3so/OUfknPGykP6OaIem2RMg2Kvr7+nrCJkIikQKBgBrL\\\\nlLektIPNaShSlBTYOy9mBF5Dib0Fs1LezSbOpJ/0Aaq66QWVtdx2l8AXpvTK56SC\\\\nMiQBcbUd72b7dtNR/LsbBBL2t99kIWhOdg3WvSVFnq6q6+dTgvyzND2qgWgqfAu3\\\\nGzcqSdn0WlO04vGKZZBQokAoowqQ8y30bvoE9gMlAoGAUlz8JkjjuE/JZBbPn+lq\\\\n7j3Zt5PZWln6RtkB92ERlt8zfTL+Q2iafYbrZCM5e7TsCXJMlrBE1kS6juJB2KRG\\\\nsKXH9ZnggSDZ5eZmyimk8mbxCRA7eg7Jb8yYFRu71BVJgtkvvvIH8tgVyNq0E1cK\\\\nt2dHvGe2O73ripbYF7K1Sus=\\\\n-----END PRIVATE KEY-----\\\\n\",\"client_email\":\"firebase-adminsdk-29ube@djuli-zp-development.iam.gserviceaccount.com\",\"client_id\":\"109629423479883879193\",\"auth_uri\":\"https://accounts.google.com/o/oauth2/auth\",\"token_uri\":\"https://oauth2.googleapis.com/token\",\"auth_provider_x509_cert_url\":\"https://www.googleapis.com/oauth2/v1/certs\",\"client_x509_cert_url\":\"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-29ube%40djuli-zp-development.iam.gserviceaccount.com\"}');\n\n//# sourceURL=webpack://typescript-djuli/./src/database_connection/keys/service-key-development.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/bin/www.ts");
/******/ 	
/******/ })()
;