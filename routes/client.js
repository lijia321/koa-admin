const Router = require('koa-router');
const router = new Router();
const userRoute = require('./client/user');
const loginRoute = require('./client/login');
router.get('/', async (ctx, next) => {
    await ctx.render('index')  //返回模板
});
router.use(userRoute.routes(), userRoute.allowedMethods());
router.use(loginRoute.routes(), loginRoute.allowedMethods());
module.exports = router;