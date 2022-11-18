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

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst http = __importStar(__webpack_require__(/*! http */ \"http\"));\r\nconst winston_logger_1 = __importDefault(__webpack_require__(/*! ../logger_module/winston-logger */ \"./src/logger_module/winston-logger.ts\"));\r\nconst index_1 = __importDefault(__webpack_require__(/*! ../index */ \"./src/index.ts\"));\r\nconst connect_1 = __importDefault(__webpack_require__(/*! ../database_connection/connect */ \"./src/database_connection/connect.ts\"));\r\nconst server = http.createServer(index_1.default);\r\nfunction normalizePort(val) {\r\n    const normolizedPort = typeof val === 'string' ? parseInt(val, 10) : val;\r\n    if (isNaN(normolizedPort)) {\r\n        return val;\r\n    }\r\n    if (normolizedPort >= 0) {\r\n        return normolizedPort;\r\n    }\r\n    return false;\r\n}\r\nconst port = normalizePort(process.env.PORT || 3000);\r\nindex_1.default.set('port', port);\r\n// eslint-disable-next-line no-undef\r\nconst onError = (error) => {\r\n    if (error.syscall !== 'listen') {\r\n        throw error;\r\n    }\r\n    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;\r\n    switch (error.code) {\r\n        case 'EACCES':\r\n            winston_logger_1.default.error(`${bind} requires elevated privileges`);\r\n            break;\r\n        // process.exit(1);\r\n        case 'EADDRINUSE':\r\n            winston_logger_1.default.error(`${bind} is already in use`);\r\n            break;\r\n        default:\r\n            throw error;\r\n    }\r\n    process.exit(1);\r\n};\r\nconst onListening = () => __awaiter(void 0, void 0, void 0, function* () {\r\n    const addr = server.address();\r\n    const bind = typeof addr === 'string' ? `pipe ${addr}` : `${addr.port}`;\r\n    winston_logger_1.default.info(`Server is listening at http://localhost:${bind}/api/v0/`);\r\n    yield (0, connect_1.default)();\r\n});\r\nserver.listen(port);\r\nserver.on('listening', onListening);\r\nserver.on('error', onError);\r\n\n\n//# sourceURL=webpack://assignment/./src/bin/www.ts?");

/***/ }),

/***/ "./src/controller/form.controller.ts":
/*!*******************************************!*\
  !*** ./src/controller/form.controller.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.createFormHandler = void 0;\r\nconst winston_logger_1 = __importDefault(__webpack_require__(/*! ../logger_module/winston-logger */ \"./src/logger_module/winston-logger.ts\"));\r\nconst form_service_1 = __webpack_require__(/*! ../service/form.service */ \"./src/service/form.service.ts\");\r\nfunction createFormHandler(req, res, next) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        try {\r\n            const data = yield (0, form_service_1.submitFormService)(req.body);\r\n            return res.send(data);\r\n        }\r\n        catch (e) {\r\n            winston_logger_1.default.error(e);\r\n            next(e);\r\n        }\r\n    });\r\n}\r\nexports.createFormHandler = createFormHandler;\r\n\n\n//# sourceURL=webpack://assignment/./src/controller/form.controller.ts?");

/***/ }),

/***/ "./src/controller/user.controller.ts":
/*!*******************************************!*\
  !*** ./src/controller/user.controller.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.loginUser = exports.createPersonalUserHandler = void 0;\r\nconst user_service_1 = __webpack_require__(/*! ../service/user.service */ \"./src/service/user.service.ts\");\r\nconst winston_logger_1 = __importDefault(__webpack_require__(/*! ../logger_module/winston-logger */ \"./src/logger_module/winston-logger.ts\"));\r\nfunction createPersonalUserHandler(req, res, next) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        try {\r\n            const user = yield (0, user_service_1.createUserAccount)(req.body);\r\n            // logger.info(user);\r\n            return res.send(user);\r\n        }\r\n        catch (e) {\r\n            winston_logger_1.default.error(e);\r\n            next(e);\r\n        }\r\n    });\r\n}\r\nexports.createPersonalUserHandler = createPersonalUserHandler;\r\nfunction loginUser(req, res, next) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        try {\r\n            const userLoginStatus = yield (0, user_service_1.loginUserService)(req.body);\r\n            if (!userLoginStatus.success) {\r\n                return res.status(userLoginStatus.statusCode).send({ message: userLoginStatus.message });\r\n            }\r\n            return res.status(userLoginStatus.statusCode).send(Object.assign(Object.assign({}, userLoginStatus.data), { accessToken: userLoginStatus.accessToken }));\r\n        }\r\n        catch (error) {\r\n            next(error);\r\n        }\r\n    });\r\n}\r\nexports.loginUser = loginUser;\r\n\n\n//# sourceURL=webpack://assignment/./src/controller/user.controller.ts?");

/***/ }),

/***/ "./src/database_connection/connect.ts":
/*!********************************************!*\
  !*** ./src/database_connection/connect.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst winston_logger_1 = __importDefault(__webpack_require__(/*! ../logger_module/winston-logger */ \"./src/logger_module/winston-logger.ts\"));\r\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\r\nconst connect = () => __awaiter(void 0, void 0, void 0, function* () {\r\n    // This should be either put in .env file or pm2 environment ecosystem file or we can use config module to store secrets.\r\n    // Used here for simplicity so you can replace the db instance with your one local mongo instance and test the services\r\n    const databaseUrl = 'mongodb://skyfri:skyfri@0.0.0.0:27000';\r\n    try {\r\n        yield mongoose_1.default.connect(databaseUrl);\r\n        winston_logger_1.default.info('Connected');\r\n    }\r\n    catch (err) {\r\n        winston_logger_1.default.error(`Disconnected: Error message :${err}`);\r\n    }\r\n});\r\nexports[\"default\"] = connect;\r\n\n\n//# sourceURL=webpack://assignment/./src/database_connection/connect.ts?");

/***/ }),

/***/ "./src/errorhandler/handler.error.ts":
/*!*******************************************!*\
  !*** ./src/errorhandler/handler.error.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.notAvailableRouteErrorHandler = exports.errorHandler = void 0;\r\nconst errorHandler = (error, req, res, next) => {\r\n    var _a;\r\n    if (res.headersSent) {\r\n        next(error);\r\n    }\r\n    else {\r\n        res.status(500).json(Object.assign({ message: error.message }, (((_a = \"development\") === null || _a === void 0 ? void 0 : _a.trim()) === 'production' ? null : { err: error.stack })));\r\n    }\r\n};\r\nexports.errorHandler = errorHandler;\r\nconst notAvailableRouteErrorHandler = (req, res) => {\r\n    res.status(404);\r\n    res.json({\r\n        success: true,\r\n        message: 'Welcome to Skyfri API Services',\r\n    });\r\n};\r\nexports.notAvailableRouteErrorHandler = notAvailableRouteErrorHandler;\r\n\n\n//# sourceURL=webpack://assignment/./src/errorhandler/handler.error.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nconst cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\r\nconst service_routes_1 = __importDefault(__webpack_require__(/*! ./routers/service.routes */ \"./src/routers/service.routes.ts\"));\r\nconst handler_error_1 = __webpack_require__(/*! ./errorhandler/handler.error */ \"./src/errorhandler/handler.error.ts\");\r\nconst app = (0, express_1.default)();\r\napp.use((0, cors_1.default)());\r\napp.use(express_1.default.json({ limit: '3000mb' }));\r\napp.use(express_1.default.urlencoded({ limit: '3000mb', extended: true }));\r\napp.use('/api/v0/', service_routes_1.default);\r\napp.use(handler_error_1.errorHandler);\r\napp.use(handler_error_1.notAvailableRouteErrorHandler);\r\nexports[\"default\"] = app;\r\n\n\n//# sourceURL=webpack://assignment/./src/index.ts?");

/***/ }),

/***/ "./src/logger_module/winston-logger.ts":
/*!*********************************************!*\
  !*** ./src/logger_module/winston-logger.ts ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst winston_1 = __webpack_require__(/*! winston */ \"winston\");\r\nconst defaultLevel = process.env.LOG_LEVEL || 'info';\r\nconst defaultOptions = {\r\n    exitOnError: false,\r\n    level: defaultLevel,\r\n};\r\nconst options = {\r\n    transports: [new winston_1.transports.Console(), new winston_1.transports.File({ filename: 'logs/output.log' })],\r\n    format: winston_1.format.combine(winston_1.format.colorize({ all: true }), winston_1.format.simple()),\r\n};\r\nlet loggerOptions = {};\r\nif (\"development\".trim() === 'development') {\r\n    loggerOptions = Object.assign(Object.assign({}, defaultOptions), options);\r\n}\r\nconst logger = (module.exports = (0, winston_1.createLogger)(loggerOptions));\r\nexports[\"default\"] = logger;\r\n\n\n//# sourceURL=webpack://assignment/./src/logger_module/winston-logger.ts?");

/***/ }),

/***/ "./src/middleware/validateResource.ts":
/*!********************************************!*\
  !*** ./src/middleware/validateResource.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.validateRequestInput = void 0;\r\nconst validate = (schema) => (req, res, next) => {\r\n    try {\r\n        schema.parse({\r\n            body: req.body,\r\n            query: req.query,\r\n            params: req.params,\r\n        });\r\n        next();\r\n    }\r\n    catch (e) {\r\n        const errorList = [];\r\n        for (const err of e.issues) {\r\n            const errorObject = {\r\n                field: err.validation || err.path[1] || 'input',\r\n                message: err.message,\r\n                code: err.code,\r\n            };\r\n            errorList.push(errorObject);\r\n        }\r\n        return res.status(400).send({ success: false, errors: errorList });\r\n    }\r\n};\r\nconst validateRequestInput = () => (req, res, next) => {\r\n    try {\r\n        next();\r\n    }\r\n    catch (e) {\r\n        return res.status(400).send(e.errors);\r\n    }\r\n};\r\nexports.validateRequestInput = validateRequestInput;\r\nexports[\"default\"] = validate;\r\n\n\n//# sourceURL=webpack://assignment/./src/middleware/validateResource.ts?");

/***/ }),

/***/ "./src/model/form.model.ts":
/*!*********************************!*\
  !*** ./src/model/form.model.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\r\nconst formSchema = new mongoose_1.default.Schema({\r\n    agreementTitle: { type: String, trim: true },\r\n    billingFrequency: { type: String },\r\n    client: { type: String },\r\n    subsidiary: { type: String },\r\n    paymentTerms: { type: Number },\r\n    startDate: { type: Date },\r\n    endDate: { type: Date },\r\n}, {\r\n    timestamps: true,\r\n});\r\nconst FormModel = mongoose_1.default.model('Form', formSchema);\r\nexports[\"default\"] = FormModel;\r\n\n\n//# sourceURL=webpack://assignment/./src/model/form.model.ts?");

/***/ }),

/***/ "./src/model/user.model.ts":
/*!*********************************!*\
  !*** ./src/model/user.model.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.userSchema = void 0;\r\nconst bcrypt_1 = __importDefault(__webpack_require__(/*! bcrypt */ \"bcrypt\"));\r\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\r\nconst passport_local_mongoose_1 = __importDefault(__webpack_require__(/*! passport-local-mongoose */ \"passport-local-mongoose\"));\r\nconst Schema = mongoose_1.default.Schema;\r\nexports.userSchema = new Schema({\r\n    email: { type: String, required: true, trim: true },\r\n    password: { type: String, required: true },\r\n    username: { type: String, unique: true, required: true, trim: true },\r\n    fullname: { type: String, required: true },\r\n}, {\r\n    collection: 'userDB',\r\n    timestamps: true,\r\n});\r\nexports.userSchema.pre('save', function (next) {\r\n    const user = this;\r\n    if (user.isModified(user.password) || user.isNew) {\r\n        bcrypt_1.default.hash(user.password, 10, function (error, hash) {\r\n            if (error)\r\n                return next(error);\r\n            user.password = hash;\r\n            next();\r\n        });\r\n    }\r\n    else {\r\n        return next();\r\n    }\r\n});\r\nexports.userSchema.post('save', function (_, next) {\r\n    next();\r\n});\r\nexports.userSchema.plugin(passport_local_mongoose_1.default);\r\nconst UserModel = mongoose_1.default.model('User', exports.userSchema);\r\nexports[\"default\"] = UserModel;\r\n\n\n//# sourceURL=webpack://assignment/./src/model/user.model.ts?");

/***/ }),

/***/ "./src/routers/service.routes.ts":
/*!***************************************!*\
  !*** ./src/routers/service.routes.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst form_schema_1 = __webpack_require__(/*! ./../schema/form.schema */ \"./src/schema/form.schema.ts\");\r\nconst express_1 = __webpack_require__(/*! express */ \"express\");\r\nconst validateResource_1 = __importDefault(__webpack_require__(/*! ../middleware/validateResource */ \"./src/middleware/validateResource.ts\"));\r\nconst user_controller_1 = __webpack_require__(/*! ../controller/user.controller */ \"./src/controller/user.controller.ts\");\r\nconst user_schema_1 = __webpack_require__(/*! ../schema/user.schema */ \"./src/schema/user.schema.ts\");\r\nconst form_controller_1 = __webpack_require__(/*! ../controller/form.controller */ \"./src/controller/form.controller.ts\");\r\nconst router = (0, express_1.Router)();\r\nrouter.get('/', (req, res) => res.sendStatus(200));\r\nrouter.post('/registerUser', (0, validateResource_1.default)(user_schema_1.userSchema), user_controller_1.createPersonalUserHandler);\r\nrouter.post('/loginUser', (0, validateResource_1.default)(user_schema_1.loginSchema), user_controller_1.loginUser);\r\nrouter.post('/submitForm', (0, validateResource_1.default)(form_schema_1.formSchema), form_controller_1.createFormHandler);\r\nexports[\"default\"] = router;\r\n\n\n//# sourceURL=webpack://assignment/./src/routers/service.routes.ts?");

/***/ }),

/***/ "./src/schema/form.schema.ts":
/*!***********************************!*\
  !*** ./src/schema/form.schema.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.formSchema = void 0;\r\nconst z = __importStar(__webpack_require__(/*! zod */ \"zod\"));\r\nconst zod_1 = __webpack_require__(/*! zod */ \"zod\");\r\nconst subsidiaryOptions = ['Rooftop', 'Ground Mounted'];\r\nconst clientsOption = ['Norsk Solar', 'Green Production'];\r\nconst billingFrequencyOptions = ['Monthly', 'Quarterly'];\r\nconst allowedPaymentOptin = [0, 7, 14];\r\nconst dateSchema = z.preprocess((arg) => {\r\n    if (typeof arg === 'string' || arg instanceof Date)\r\n        return new Date(arg);\r\n}, z.date());\r\nexports.formSchema = (0, zod_1.object)({\r\n    body: (0, zod_1.object)({\r\n        agreementTitle: (0, zod_1.string)({ required_error: 'Agreement title is required' }).min(4, 'Agreement title is too short. Should be minium 4 character long'),\r\n        subsidiary: z.enum(subsidiaryOptions),\r\n        client: z.enum(clientsOption),\r\n        billingFrequency: z.enum(billingFrequencyOptions),\r\n        paymentTerms: z.number().refine((data) => allowedPaymentOptin.includes(data), {\r\n            message: 'Please check payment options. Expected [0,7,14]',\r\n        }),\r\n        startDate: dateSchema,\r\n        endDate: dateSchema,\r\n    })\r\n        .strict()\r\n        .refine((data) => data.startDate < data.endDate, {\r\n        message: 'End date must be greater than start date',\r\n        path: ['endDate'],\r\n    }),\r\n});\r\n\n\n//# sourceURL=webpack://assignment/./src/schema/form.schema.ts?");

/***/ }),

/***/ "./src/schema/user.schema.ts":
/*!***********************************!*\
  !*** ./src/schema/user.schema.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.loginSchema = exports.userSchema = void 0;\r\nconst zod_1 = __webpack_require__(/*! zod */ \"zod\");\r\nexports.userSchema = (0, zod_1.object)({\r\n    body: (0, zod_1.object)({\r\n        fullname: (0, zod_1.string)({ required_error: 'full name is required' }),\r\n        username: (0, zod_1.string)({\r\n            required_error: 'username is required',\r\n        }).min(3, 'user name must be greater than 4 letter'),\r\n        email: (0, zod_1.string)({\r\n            required_error: 'Email is required',\r\n        }).email('Not a valid email'),\r\n        password: (0, zod_1.string)({\r\n            required_error: 'password is required',\r\n        }).min(6, 'Password too short - should be 6 chars minimum'),\r\n    }).strict(),\r\n});\r\nexports.loginSchema = (0, zod_1.object)({\r\n    body: (0, zod_1.object)({\r\n        email: (0, zod_1.string)({\r\n            required_error: 'Email is required',\r\n        }).email('Not a valid email'),\r\n        password: (0, zod_1.string)({\r\n            required_error: 'password is required',\r\n        }),\r\n    }).strict(),\r\n});\r\n\n\n//# sourceURL=webpack://assignment/./src/schema/user.schema.ts?");

/***/ }),

/***/ "./src/service/form.service.ts":
/*!*************************************!*\
  !*** ./src/service/form.service.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.submitFormService = void 0;\r\nconst form_model_1 = __importDefault(__webpack_require__(/*! ../model/form.model */ \"./src/model/form.model.ts\"));\r\nfunction submitFormService(input) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        try {\r\n            const result = yield form_model_1.default.create(input);\r\n            return result;\r\n        }\r\n        catch (e) {\r\n            throw new Error(e);\r\n        }\r\n    });\r\n}\r\nexports.submitFormService = submitFormService;\r\n\n\n//# sourceURL=webpack://assignment/./src/service/form.service.ts?");

/***/ }),

/***/ "./src/service/user.service.ts":
/*!*************************************!*\
  !*** ./src/service/user.service.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __rest = (this && this.__rest) || function (s, e) {\r\n    var t = {};\r\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\r\n        t[p] = s[p];\r\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\r\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\r\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\r\n                t[p[i]] = s[p[i]];\r\n        }\r\n    return t;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.loginUserService = exports.createUserAccount = void 0;\r\nconst user_model_1 = __importDefault(__webpack_require__(/*! ../model/user.model */ \"./src/model/user.model.ts\"));\r\nconst jsonwebtoken_1 = __importDefault(__webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\"));\r\nconst bcrypt_1 = __importDefault(__webpack_require__(/*! bcrypt */ \"bcrypt\"));\r\nfunction createUserAccount(input) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        try {\r\n            // const user: any = await User.findOne({\r\n            // \temail: input.email,\r\n            // });\r\n            // if (!user) {\r\n            // \treturn {\r\n            // \t\tsuccess: false,\r\n            // \t\tstatusCode: 400,\r\n            // \t\tmessage: 'User already exist',\r\n            // \t};\r\n            // }\r\n            return yield user_model_1.default.create(input);\r\n        }\r\n        catch (e) {\r\n            throw new Error(e);\r\n        }\r\n    });\r\n}\r\nexports.createUserAccount = createUserAccount;\r\nfunction loginUserService(input) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const user = yield user_model_1.default.findOne({\r\n            email: input.email,\r\n        });\r\n        if (!user) {\r\n            return {\r\n                success: false,\r\n                statusCode: 404,\r\n                message: 'User does not exist',\r\n            };\r\n        }\r\n        const validPassword = yield bcrypt_1.default.compare(input.password, user.password);\r\n        if (!validPassword) {\r\n            return {\r\n                success: false,\r\n                statusCode: 401,\r\n                message: 'Please check your password',\r\n            };\r\n        }\r\n        const accessToken = jsonwebtoken_1.default.sign({ userId: user._id }, 'securekey', {\r\n            expiresIn: '1d',\r\n        });\r\n        yield user_model_1.default.findByIdAndUpdate(user._id, { accessToken });\r\n        const _a = user._doc, { password } = _a, userData = __rest(_a, [\"password\"]);\r\n        return {\r\n            success: true,\r\n            statusCode: 201,\r\n            accessToken: `${accessToken}`,\r\n            data: userData,\r\n        };\r\n    });\r\n}\r\nexports.loginUserService = loginUserService;\r\n\n\n//# sourceURL=webpack://assignment/./src/service/user.service.ts?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

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

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "passport-local-mongoose":
/*!******************************************!*\
  !*** external "passport-local-mongoose" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("passport-local-mongoose");

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