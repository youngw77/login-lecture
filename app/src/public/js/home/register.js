"use strict";

const id = document.querySelector("#id"),
name = document.querySelector("#name"),
password = document.querySelector("#password"),
checkPassword = document.querySelector("#check-password"),
registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
    const req = {
        id: id.value,
        name: name.value,
        password: password.value,
        checkPassword: checkPassword.value,
};

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) {
            location.href = "/login";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("회원가입 중 에러 발생");
    });
}