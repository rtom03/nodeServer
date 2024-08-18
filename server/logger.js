const EventEmitter = require('events')

class Logger extends EventEmitter {
    log(message) {
        console.log(message)
        this.emit('log', { data: '{name:tom,job:software}' })
    }
}

module.exports = Logger

// })
//implementation