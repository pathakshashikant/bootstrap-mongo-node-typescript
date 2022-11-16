import { createLogger, transports, format } from 'winston';

const defaultLevel = process.env.LOG_LEVEL || 'info';

const defaultOptions = {
	exitOnError: false,
	level: defaultLevel,
};

const options = {
	transports: [new transports.Console(), new transports.File({ filename: 'logs/output.log' })],
	format: format.combine(format.colorize({ all: true }), format.simple()),
};

let loggerOptions = {};

if (process.env.NODE_ENV!.trim() === 'development') {
	loggerOptions = { ...defaultOptions, ...options };
}

const logger = (module.exports = createLogger(loggerOptions));

export default logger;
