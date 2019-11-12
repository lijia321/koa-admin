const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const md5 = require('md5')
const loginModel = require("../models/login");
const userModel = require("../models/user");

const signupNewUser = async function (ctx) {
    const data = ctx.request.body;
    const user = {
        userName: data.userName,
        password: md5(data.password),
        repeatpass: md5(data.repeatpass)
    }
    if (!data.userName) {
        ctx.body = {
            code: 1,
            msg: '用户为空',
            result: {
                data: null
            }
        };
        return
    }
    if (!data.password) {
        ctx.body = {
            code: 1,
            msg: '密码为空',
            result: {
                data: null
            }
        };
        return
    }
    if (!data.repeatpass) {
        ctx.body = {
            code: 1,
            msg: '确认密码为空',
            result: {
                data: null
            }
        };
        return
    }
    if (data.repeatpass !== data.password) {
        ctx.body = {
            code: 1,
            msg: '两次密码不一致',
            result: {
                data: null
            }
        };
        return
    }
    try {
        const userResult = await userModel.findDataByName(user.userName);
        console.log(userResult, '=====userResult====');
        if (userResult.length > 0) {
            ctx.body = {
                code: 1,
                msg: '用户存在',
                result: {
                    data: null
                }
            };
            return
        }
        const loginResult = await loginModel.insertData([user.userName, user.password, user.repeatpass]);
        // const userInfo = result[0];
        console.log(loginResult, '==loginResult=======');
        ctx.body = {
            code: 0,
            msg: null,
            result: {
                data: {
                    id: loginResult.insertId,
                    userName: user.userName
                }
            }

        };
    } catch (error) {
        ctx.body = {
            code: -1,
            msg: error,
            result: { data: null }
        };
    }

};

module.exports = {
    signupNewUser
};