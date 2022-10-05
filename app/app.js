"use strict";



//모듈
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const morgan = require('morgan');




const app = express();
dotenv.config();

const accessLogStream = require("./src/config/log");
//라우팅
const home = require("./src/routes/home");





//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev", {steream: accessLogStream}));
app.use("/", home);  //use -> 미들 웨어를 등록해주는 메소드.



module.exports = app;


