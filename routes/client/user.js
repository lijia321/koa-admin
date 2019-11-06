const Router = require('koa-router');
const router = new Router();

router.get('/user/list', async (ctx, next) => {
    const users = [{ name: 'Dead Horse' }, { name: 'Jack' }, { name: 'Tom' }];
    await ctx.render('user/list', {
        users,
        title: '用户列表'
    });
});
router.get('/user/detail/:id', async (ctx, next) => {

    await ctx.render('user/detail', {
        id: ctx.params.id,
        title: '用户详情'
    });
})

module.exports = router;