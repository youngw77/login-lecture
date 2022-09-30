"use strict";

const User = require("./User");

class UserStorage {
    static #users = {
        id: ["youngwoo", "kim", "김영우"],
        password: ["1234", "1234", "12345"],
        name: ["가나다", "사다마", "차나다"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
    
    static getUserInfo(id) {
        const users = this.#users;
        // login page에서 user의 값을 this로 가져온다.
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
        // 저장된 배열 값을 반환해준다.
    }

    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        return {success: true};
    }
}

module.exports = UserStorage;