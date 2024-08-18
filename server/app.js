const Logger = require('./logger')
const logger = new Logger();

logger.on('log', (arg) => {
    console.log('logging', arg)
})
logger.log('message')



let _ = require('underscore')

// Core module
// File or folder
// node_modules

let result = _.contains([1, 2, 3], 2)
