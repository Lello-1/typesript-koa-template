
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import 'dotenv/config';

const app = new Koa();

const PORT = process.env.PORT || 3000;

app.use(bodyParser());
app.use(logger());

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));