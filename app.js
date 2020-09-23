const express = require('express')
const app = express()
import router from './routes/index.js';

const port = 3000



router(app);


// app.use(express.static('public'));

// app.get('/', (req, res) => res.render('index'))

app.get('/getuserInfo', (req, res) => res.send({
    "code": 20000,
    "data": {
        "roles": ['admin'],
        "introduction": "I’m Admin",
        "avatar": "Wyt3w6o",
        "name": "LY"
    }
}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))