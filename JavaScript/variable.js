"use strict";

// 2. Variable, read and write
// let (ES6)

let globalName = "global name";
{
  let name = "Jin";
  console.log(name);
  name = "hello";
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// var hoisting (from bottom to top)
// No use {}
// No var Yes let
{
  age = 4;
  var age;
}
console.log(age);

// 3. Constant(const), read only
// immutable data type
//    1. 안전함
//    2. thread 안전
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive type (single item) : number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function
const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890; // over (-2*53 ~ 2*53)
console.log('value: ${bigInt}, type: ${typeof bigInt}');
Number.MAX_SAFE_INTEGER;

//string
//  ` use no need +
//string + var
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `Hi ${brendan}`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
//true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
// clearly empty
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true

//object, real-life object, data structure
const jin = {name: 'jin', age: 27};
jin.age = 20;

// Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(4));
console.log(`value: ${text}, type: ${typeof text}`);
text = 3;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 8
console.log(`value: ${text}, type: ${typeof text}`);
text = '10' / '5'
console.log(`value: ${text}, type: ${typeof text}`);
