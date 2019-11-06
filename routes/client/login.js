const Router = require('koa-router');
const router = new Router();

router.get('/login', async (ctx, next) => {
    await ctx.render('login/login',{
        title:'登录页面'
    });
});
router.get('/regist', async (ctx, next) => {
    await ctx.render('login/regist',{
        title:'注册页面'
    });
});


module.exports = router;