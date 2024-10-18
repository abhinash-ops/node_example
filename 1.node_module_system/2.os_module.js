const os = require('os')

console.log(os.platform())

console.log(os.arch())//64 bit or 32 bit

console.log(os.networkInterfaces())// gives complete info about our network 

console.log(os.cpus())// complete info about our CPU 

console.log(os.totalmem()) // total memory of system in bytes

console.log(os.freemem())