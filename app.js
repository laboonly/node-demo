const express = require('express')
const app = express()
import router from './routes/index.js';

const port = 3000

//解决跨域问题
app.all('*', (req, res, next) => {
    const { origin, Origin, referer, Referer } = req.headers;
    const allowOrigin = origin || Origin || referer || Referer || '*';
      res.header("Access-Control-Allow-Origin", allowOrigin);
      res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
      res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials", true); //可以带cookies
      res.header("X-Powered-By", 'Express');
      if (req.method == 'OPTIONS') {
        res.sendStatus(200);
      } else {
      next();
      }
  });


app.use(express.static('public'));

app.get('/', (req, res) => res.render('index'))

router(app);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))