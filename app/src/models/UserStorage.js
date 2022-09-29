"use strict";

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

}

module.exports = UserStorage;