const express = require('express')
const app = express()
const port = 3000

function loginMiddleware(req, res, next) {
    const time = new Date()
    console.log(`[${time.toString()}] ${req.method} ${req.url}`)
    next()
}

app.use(loginMiddleware)
app.use(express.static('public'));

app.get('/', (req, res) => res.render('index'))

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