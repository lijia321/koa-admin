const { query } = require('../utils/query')


//注册用户
const insertData = function (value) {
    let _sql = "insert into users(userName,password,repeatpass) values(?,?,?);"
    return query(_sql, value);
}

module.exports = {
    insertData
}