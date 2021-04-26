// if
function calculate (command, a, b){
    if (command === 'add' ) {
        return a+b;
    } else if (command === 'subtraction' ) {
        return a-b;
    } else if (command === 'multiply' ) {
        return a*b;
    } else if (command === 'divide' ) {
        return a/b;
    } else if (command === 'remainder' ) {
        return a%b;
    } else {
        console.log('can\'t')
    }
};
console.log(calculate ('add', 1, 2));
console.log(calculate ('subtraction', 1, 2));
console.log(calculate ('multiply', 1, 2));
console.log(calculate ('divide', 1, 2));
console.log(calculate ('remainder', 1, 2));
console.log(calculate ('-=', 1, 2));

//switch
function calculate (command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'subtraction':
            return a-b;
        case 'multiply':
            return a*b;
        case 'divide':
            return a/b;
        case 'remainder':
            return a%b;
        default:
            console.log('can\'t');
            break;
            // throw Error('can\'t');
    }
}
console.log(calculate('remainder', 1, 2));
console.log(calculate('Subtraction assignment', 1, 2));