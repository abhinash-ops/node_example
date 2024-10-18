const figlet = require('figlet')


figlet("Hello World!!", function (err, data) {
    // if (err) {
    //     console.log("Something went wrong...");
    //     console.dir(err);
    //     return;
    // }
    console.log(data);
});

// as figlet call is asynchronuous we need ti use callback function the error handling is optional

//this is synchronous way of code
// const figlet = require('figlet');
// console.log(figlet.textSync("Hello World!!"));
