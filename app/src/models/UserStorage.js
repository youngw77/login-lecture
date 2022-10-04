"use strict";

const db = require("../config/db");

class UserStorage {
//     static #getUserInfo(data, id) {
//     const users = JSON.parse(data);
//     const idx = users.id.indexOf(id);
//     //this로 가져온 user의 값의 id를 키 값으로 해당 배열의 자식 값의 리스트를 idx에 저장한다.
//     const usersKeys = Object.keys(users);
//     //this값으로 받아온 user의 키값을 userskeys에 저장한다
//     const userInfo = usersKeys.reduce((newUser, info) => {
//         newUser[info] = users[info][idx];
//         return newUser;
//     }, {});
//     //userskeys의 this값으로 받은 키값과 자식값을 초기값 =>
//     //object{} userinfo 배열 안에 id와 password를 저장한다.(info는 키값 idx는 user로 부터 받은 id값의 리스트)
//         return userInfo;
// }
//     static #getUsers(data, isAll, fields) {
//         const users = JSON.parse(data);
//         if(isAll) return users;
//         const newUsers = fields.reduce((newUsers, field) => {
//             if (users.hasOwnProperty(field)) {
//                 newUsers[field] = users[field];
//             }
//             return newUsers;
//         }, {});
//         return newUsers;

//     }

//     static getUsers(isAll, ...fields) {


//     }

    static getUserInfo(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE id = ?";
        db.query(query, [id], (err, data) => {
            if(err) reject(`${err}`);
            resolve(data[0]);
            // db.query의 안의 문이 성공하면 resolve 실행, 실패하면 reject 실행
        });
     });

    };

    

    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users(id, name, password) VALUES(?, ?, ?)";
        db.query(
            query, 
            [userInfo.id, userInfo.name, userInfo.password], 
            (err) => {
            if(err) reject(`${err}`);
            resolve( {success: true} );
            // db.query의 안의 문이 성공하면 resolve 실행, 실패하면 reject 실행
        });
     });
    }
}

module.exports = UserStorage;