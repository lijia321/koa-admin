const Router = require('koa-router');
const router = new Router();
const loginControl = require("../../service/controllers/login");

router.get('/v1/user/list', async (ctx, next) => {
    let dataList = await query("SELECT * FROM user")
    ctx.body = dataList;
});

router.post('/v1/user/signup',loginControl.signupNewUser);



module.exports = router;