function sum(a, b) {
    console.log(a + b);
}
function sub(a, b) {
    console.log(a - b);
}
function mul(a, b) {
    console.log(a * b);
}
function div(a, b) {
    console.log(a / b);
}

module.exports = {
    addition: sum,//here addition is the key to access this sum (value) method in another file 
    subraction: sub,
    multiplication: mul,
    division: div
}