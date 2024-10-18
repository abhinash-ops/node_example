const cp = require('child_process')
// here it is just like an import statement in java . for importingn modules we use require keyword. and here "child_process""" is the module name which we are impotring 

//cp.execSync('calc')

// const output = cp.execSync('ls', { encoding: 'utf8' });
// console.log(output)

//cp.execSync('start chrome')// it starts chrome 

//cp.execSync('start chrome https://www.scaler.com/academy/')// this open whatever the url we gave in it 

console.log(cp.execSync('node demo.js', { encoding: 'utf8' }))
// here it executes a demo.js file and prints the output from here itself
