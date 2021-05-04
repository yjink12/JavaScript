'use strict';

// Promise
// 1. State 상태
// pending state: Promise가 만들어져서 지정한 작업이 수행 중일 때 
// fulfilled state: 작업을 성공적으로 끝내면
// rejected state: 파일을 찾을 수가 없거나 네트워크에 문제가 생긴다면

// 2. producer 와 consumer 의 차이
// Producer: 원하는 기능을 수행해서 해당하는 데이터를 만들어내는 promise object
// Consumer: 원하는 데이터를 소비하는 promise object

// 2-1. Producer
// new Promise 가 만들어질 때, executor 함수가 바로 실행 (자동적으로)
const promise = new Promise((resolve, reject) => {
    // 무거운 작업 수행 (네트워크 통신, 파일 읽어오기) => 비동기적으로 처리하기
    console.log('doing something...');
    setTimeout(() => {
        resolve('jin');
        // reject(new Error('no network'));
    }, 2000);
});

// 2-2. Consumers: then, catch, finally
// then: 값이 정상적으로 수행이 된다면
promise//
    .then((value) => {
    console.log(value);
    })
// catch: error 처리
    .catch(error => {
        console.log(error);
    })
// finally: 
    .finally(() => {
        console.log('finally');
    });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num *2) //2
.then(num => num *3) //6
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num -1), 1000);
    });                     //5
})
.then(num => console.log(num));

// 4. Error handling
const getHen = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐔'), 1000);
    });
const getEgg = hen => 
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
    });
const cook = egg => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

getHen()
.then(getEgg)
.catch(error => {
    return '🍞';
})
.then(cook)
.then(console.log)
.catch(console.log);