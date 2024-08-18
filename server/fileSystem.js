const file = require('fs')

const files = file.readdirSync('./')

console.log(files)

//event emitter
const EventEmitter = require('events')
const emitter = new EventEmitter()

//Register a listener

emitter.on('log', (arg) => {
    console.log('logging', arg)
})
//emit Making a noise signalling something is happening

emitter.emit('log', { data: '{name:tom,job:software}' })