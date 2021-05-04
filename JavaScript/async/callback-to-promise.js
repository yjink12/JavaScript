'use strict';

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

// Callback 연습1 -> Promise
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'jin' && password === 'yu') ||
                    (id === 'young' && password === 'hee')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });
        
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'jin') {
                    resolve({name: 'jin', role: 'admin'});
                } else {
                    reject(new Error('no access '));
                }
            }, 1000);
        });
        
    }
}
    
const userStorage = new UserStorage();
const id = prompt('enter your id');     // 사용자에게 id 받아오기
const password = prompt('enter your password');    // 사용자에게 pw 받아오기
userStorage
.loginUser(id, password)        // userStorage 에서 로그인을 한 다음에
.then(userStorage.getRoles)     // id와 pw 를 잘 받아온다면 getRoles를 호출해서 user를 받아온다
.then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))    //user를 잘 받아온다면 alert를 띄운다
.catch(console.log);            // 만약 user를 받아올때 문제가 생기면 catch 로 error handling