const sum = function(a, b){
    return a + b;
};

const subtract = function(a, b){
    return a - b;
};

const multiply = function(a, b){
    return a * b;
};

const divide = function(a, b){
    return a / b;
};

const modulus = (a, b) => {
    return a % b;
};

const even = (a) => {
    return modulus(a, 2) == 0;
};

const odd = (a) => {
    return modulus(a, 2) != 0;
};

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
