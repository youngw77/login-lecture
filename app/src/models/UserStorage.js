"use strict";

const fs = require("fs").promises;
const User = require("./User");

class UserStorage {
    static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    //this로 가져온 user의 값의 id를 키 값으로 해당 배열의 자식 값의 리스트를 idx에 저장한다.
    const usersKeys = Object.keys(users);
    //this값으로 받아온 user의 키값을 userskeys에 저장한다
    const userInfo = usersKeys.reduce((newUser, info) => {
        newUser[info] = users[info][idx];
        return newUser;
    }, {});
    //userskeys의 this값으로 받은 키값과 자식값을 초기값 =>
    //object{} userinfo 배열 안에 id와 password를 저장한다.(info는 키값 idx는 user로 부터 받은 id값의 리스트)
        return userInfo;
}
    static #getUsers(data, isAll, fields) {
        const users = JSON.parse(data);
        if(isAll) return users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;

    }

    static getUsers(isAll, ...fields) {
        return fs
        .readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUsers(data, isAll, fields);
    })
        .catch(console.error);


    }
    
    static getUserInfo(id) {
        return fs
        .readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUserInfo(data, id);
    })
        .catch(console.error);

    }

    

    static async save(userInfo) {
        const users = await this.getUsers(true);
        if (users.id.includes(userInfo.id)) {
            throw'이미 존재하는 아이디입니다.';
        }
            users.id.push(userInfo.id);
            users.name.push(userInfo.name);
            users.password.push(userInfo.password);
            fs.writeFile("./src/databases/users.json", JSON.stringify(users));
            return {success: true};
        
    }
}

module.exports = UserStorage;