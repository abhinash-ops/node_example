const path = require('path')

let extensionname = path.extname('D:\\Nodejs-complete\\1.node_module_system\\f1.txt')//return extension name as txt
console.log(extensionname);

let basename = path.basename('D:\\Nodejs-complete\\1.node_module_system\\f1.txt')// copy the file path and make double slashes everywhere(\)
console.log(basename);

console.log(__filename)//returns the path of current file 

console.log(__dirname)