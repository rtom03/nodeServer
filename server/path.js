const path = require('path')

let pathobj = path.parse(__filename)
console.log(pathobj)


const os = require('os')

const total = os.totalmem()
let free = os.freemem()

console.log(`Total Memory ${total}, Free Memory: ${free}`)