// 创建数据库
const CREATE_TABLE = `CREATE TABLE IF NOT EXISTS user(
    userId INT(5) NOT NULL AUTO_INCREMENT,
    userName VARCHAR(255) NOT NULL,
    userMobile VARCHAR(255) NOT NULL,
    userNick VARCHAR(255) NOT NULL,
    PRIMARY KEY (userId)
);`.replace(/[\r\n]/g, '')

const CREATE_TABLE_USERS = `create table if not exists users(
    id INT(200) NOT NULL AUTO_INCREMENT,
    userName VARCHAR(100) NOT NULL,
    password VARCHAR(40) NOT NULL,
    repeatpass VARCHAR(40) NOT NULL,
    email  VARCHAR(100),
    mobile  VARCHAR(100),
    PRIMARY KEY (id)
);`
// 查询数据表
const QUERY_TABLE = (tableName) => `SELECT * FROM ${tableName}`

// 插入数据
const INSERT_TABLE = (tableName, { key, val }) => `INSERT INTO ${tableName}(${key}) VALUES (${val})`

// 更新数据
const UPDATE_TABLE = (tableName, { primaryKey, primaryVal }, { key, value }) => `UPDATE ${tableName} SET ${key}=${val} WHERE(${primaryKey}=${primaryVal});`

// 删除数据
const DELETE_TABLE = (tableName, { primaryKey, primaryVal }) => `DELETE FROM user WHERE(${primaryKey}=${primaryVal});`

module.exports = {
    CREATE_TABLE,
    INSERT_TABLE,
    UPDATE_TABLE,
    DELETE_TABLE,
    CREATE_TABLE_USERS
}