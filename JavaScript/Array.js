'use strict'
// Array

// 1. Declaration 선언
const arr1 = new Array();
const arr2 = [2, 3];
console.log(arr2[0]);

// 2. Index position
const fruits = ['♠', '♧'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length-1]);

// 3. Looping over an array
// print all fruits
// a. for
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
};

// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy 배열 추가, 삭제, 복사
// push: 배열의 가장 끝에 아이템 추가
fruits.push('☆','♥');
console.log(fruits);

// pop: 끝에서부터 아이템을 삭제
fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);

// unshift: 배열의 가장 앞에서부터 아이템 추가
fruits.unshift('☆', '★');
console.log(fruits);

// 앞에서부터 아이템을 삭제
fruits.shift();
console.log(fruits);
fruits.shift();
console.log(fruits); 

// shift 와 unshift 는 pop 과 push 보다 너무 느림

// splice: 아이템을 지정된 index 자리에서 삭제
fruits.push('☆', '★', '♥');
console.log(fruits); 
fruits.splice(1, 1);
console.log(fruits); 
fruits.splice(1, 1, '§', '○');
console.log(fruits); 

// combine two arrays 두가지의 배열 합치기
const fruits2 = ['◎', '◆'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching 검색
// 배열 안에 몇 번째에 값이 있는지 알고 싶을 때
// indexOf 와 includes (true, false)
console.clear();
console.log(fruits);
console.log(fruits.indexOf('§'));
console.log(fruits.includes('§'));
console.log(fruits.indexOf('◆'));
console.log(fruits.includes('◆'));

// lastIndexOf
console.clear();
fruits.push('§');
console.log(fruits);
console.log(fruits.indexOf('§'));
console.log(fruits.lastIndexOf('§'));

