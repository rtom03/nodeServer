
//module wrapper function 
// (function (exports, require, module, __filename, __dirname) {

var url = 'http://mylogger.io/log'

function log(message) {
    console.log(message)
}

module.exports = log;

// })
//implementation