"use strict";

const users ={
    id: ["youngwoo", "kim", "김영우"],
    password: ["1234", "1234", "12345"],
}

const output = {
hello: (req, res) => {
    res.render("home/index");
},

login: (req,res) => {
    res.render("home/login");
},
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
        password = req.body.password;

        if (users.id.includes(id)) {
            const idx = users.id.lastIndexOf(id);
            if (users.password[idx] === password) {
                return res.json({
                    sucess: true,
                });
            }
        }
        return res.json({
            success: false,
            msg: "로그인에 실패하였습니다.",
        })
    },
};

module.exports = {
    output,
    process,
};