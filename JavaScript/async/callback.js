'use strict';

// Synchronous callback
function printImmediately(print) {
    print();
}
// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

// async
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');
printImmediately(() => console.log('hello'));
printWithDelay(() => console.log('async callback'), 2000);

// Callback 연습1
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'jin' && password === 'yu') ||
                (id === 'young' && password === 'hee')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'jin') {
                onSuccess({name: 'jin', role: 'admin'});
            } else {
                onError(new Error('no access '));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');     // 사용자에게 id 받아오기
const password = prompt('enter your password');     // 사용자에게 pw 받아오기
userStorage.loginUser(
    id, 
    password, 
    user => {
        userStorage.getRoles(
            user, 
            userWithRole => {
                alert(
                    `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
                    );
            }, 
            error => {
                console.log(error);
            }
            );
    }, 
    error => {
        console.log(error);
    }
    );