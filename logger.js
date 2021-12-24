const winston = require('winston');

const logConfiguration = {
    'transports': [
        new winston.transports.File({
            filename: 'logs/timelapse.log'
        })    ]
};
const log = winston.createLogger(logConfiguration);
// Log a message
log.log({
    message: 'Hello, Winston!',
    level: 'info'
});

module.exports = log