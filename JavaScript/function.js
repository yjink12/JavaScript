//1. function declarartion
// function name(param1, param2) {body... return;}
function printHello(){
    console.log('Hello');
}
printHello();

//better
function log(message){
    console.log(message);
}
log('Hi');
log(1234);

// 2. Parameters
function changeName (obj) {
    obj.name = 'coder';
}
const jin = {name:'jin'};
changeName(jin);
console.log(jin);

//3. Default Parameters (ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('love u');

// 4. Rest parameters (ES6)
function printAll(...args){
    for (let i = 0; i < args.length; i++){
        console.log(args[i]);
    }

    // better
    for (const arg of args) {
        console.log(arg);
    }

    // better array
    args.forEach((arg) => console.log(arg));
}
printAll('Happy', 'new', 'year');

// 5. Local scope
let globalMessage = 'global';  // global variable
function printMessage(){
    let message = 'hello';
    console.log(message); //local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hi';
    }
    // console.log(childMessage); // error
}
printMessage();

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit

// bad
function upgradeUser(user) {
    if (user.point > 10) {
        //long upgrade logic...
    }
}

//good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}



// 1. Function expression
const print = function () { // anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 4));

// 2. Callback function using function expression
function randomQuiz (answer, printYes, printNo){
    if (answer === 'jinny'){
        printYes();
    } else {
        printNo();
    }
}
// anonymous function
const printYes = function() {
    console.log('yes');
};
// named function
// better debugging
const printNo = function print() {
    console.log('no');
};
randomQuiz('jinny', printYes, printNo);
randomQuiz('minny', printYes, printNo);

// Arrow function
// const simplePrint = function() {
//      console.log('simplePrint!');
//  };
// Arrow
const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    //do something more
    return a * b;
};

// IIFE : immediately invoked function expression
(function hello() {
    console.log('IIFE');
})();

// Fun Quiz time
// function calculate(command, a, b)
// command: add, subtraction, divide, multiply, remainder