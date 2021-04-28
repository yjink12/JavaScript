'use strict'
// Objects
// object = {key : value};
// how to make object

// 1. Literals and properties
const obj1 = {};                // object literal 
const obj2 = new Object();      //use class / object constructor / 키워드를 이용해서 생성


function print (person) {
    console.log(person.name);
    console.log(person.age);
}

// Object
const jin = {name: 'jin', age: 27};
print (jin);

jin.hasJob = false;         
console.log(jin.hasJob);        // possible but do not use

delete jin.hasJob;
console.log(jin.hasJob);

// 2. Computed properties 계산된 properties 속성들
console.log(jin.name);
console.log(jin['name']);
jin['hasJob'] = false;
console.log(jin.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(jin, 'name');

// 3. Property value shorthand
const person1 = {name: 'jin', age: 27};
const person2 = {name: 'min', age: 30};
const person3 = {name: 'sin', age: 20};
const person4 = new Person('kin', 50);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: object에 key가 있는지 확인 (key in obj)
console.log('name' in jin);
console.log('age' in jin);
console.log('job' in jin);
console.log(jin.job);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (let key in jin) {
    console.log(key);
}

// for (value of iterate)
const array = [1, 2, 3, 4];
for (let value of array) {
    console.log(value);
}

// 7. Cloning
const user = {name: 'jin', age: 27};
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (let key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

// new way
// const user4 = {};
// Object.assign(user4, user);
// console.log(user4);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = {color: 'yellow'};
const fruit2 = {color: 'green', size: 'small'};
const fruit3 = {color: 'blue', size: 'small', smell: 'bad'};
const mixed = Object.assign({}, fruit1, fruit2, fruit3);
console.log(mixed.color);
console.log(mixed.size);
console.log(mixed.smell);

