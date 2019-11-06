const Router = require('koa-router');
const router = new Router({
    prefix: '/api'
});
const { query } = require('../service/utils/query');
const {
    CREATE_TABLE_USERS
  } = require('../service/utils/sql')
  // 初始化数据库，创建表
  query(CREATE_TABLE_USERS,[])
  
const loginRoute = require('./server/login')
router.use(loginRoute.routes(), loginRoute.allowedMethods())
module.exports = router;