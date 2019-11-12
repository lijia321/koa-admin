const { query } = require('../utils/query')


//通过名字查找用户
const findDataByName = function (name) {
    let _sql = `SELECT * from users where userName="${name}"`
    return query(_sql);
}

module.exports = {
    findDataByName
}