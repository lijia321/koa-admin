const path = require('path')
const Koa = require('koa');
const static = require('koa-static');
const open = require('open');
const views = require('koa-views');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const app = new Koa();
const clientRoute = require('./routes/client');
const serverRoute = require('./routes/server');
const cors = require('koa2-cors');
//跨域
app.use(cors({
  credentials: true,
}));
//加载静态资源
app.use(static(path.join(__dirname + '/public')));
// 加载模板引擎
app.use(views(path.join(__dirname, '/views'), {
  extension: 'ejs'
}));
//解析body
app.use(bodyParser());
//日志
app.use(logger());
app.use(async (ctx, next) => {
  await next();
  if (ctx.status == 404) {
    ctx.status = 404
    ctx.response.body = '404';
  } else {

  }
});

//加载路由
app.use(clientRoute.routes(), clientRoute.allowedMethods());
app.use(serverRoute.routes(), serverRoute.allowedMethods());
//监听端口
app.listen(3674, () => {
  // open('http://127.0.0.1:3674');
});
console.log('listening on port 3674');