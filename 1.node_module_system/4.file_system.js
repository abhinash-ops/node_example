const fs = require('fs')
// for files


//read  a file
//let content = fs.readFileSync('f1.txt')
//console.log("file content is : " + content)// here + is used to convert the file data into readable format 


//writing a file
//fs.writeFileSync('f2.txt', 'This is a file2') // if file exists data is overridden if file wont exist then creates ans eppends


//append to a file
//fs.appendFileSync('f2.txt', '  this is the text appended')


//deleting a file
//fs.unlinkSync('f3.txt')


//for directories

//creating a directory
//fs.mkdirSync('Mydirectory')

//reading direcotry
// let content = fs.readdirSync('D:\\Nodejs-complete\\1.node_module_system\\Mydirectory')
// console.log(content)


//is exists or not 
//console.log(fs.existsSync('Mydirectory'))  //returns boolean value


//delete dir
fs.rmdirSync('Mydirectory') //gives error bcz if the dir is not empty 
