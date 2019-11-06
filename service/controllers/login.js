const userModel = require("../models/login");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const md5 = require('md5')


const signupNewUser = async function (ctx) {
    const data = ctx.request.body;
    const user = {
        userName: data.userName,
        password: md5(data.password),
        repeatpass: md5(data.repeatpass)
    }
    // console.log(...ctx.request.body)
    try {
        const userInfo = await userModel.insertData([user.userName, user.password, user.repeatpass]);
        console.log(userInfo, '=========');
    } catch (error) {
        ctx.body = {
            status: false,
            msg: error
        };
    }

    // if (userInfo != null) {
    //     const userToken = {
    //         id: userInfo.UserID,
    //         email: userInfo.UserEmail
    //     };
    //     const secret = "react-koa-bookiezilla";
    //     const token = jwt.sign(userToken, secret);
    //     ctx.body = {
    //         status: true,
    //         id: userInfo.UserID,
    //         token: token
    //     };
    // } else {
    //     ctx.body = {
    //         status: false,
    //         msg: "Duplicate key"
    //     };
    // }
};

module.exports = {
    signupNewUser
};