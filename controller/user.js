class User {
    getUserInfo(req, res, next) {
       const userinfo = {
            "code": 20000,
            "data": {
                "roles": ['admin'],
                "introduction": "I’m Admin",
                "avatar": "Wyt3w6o",
                "name": "LY"
            }
        }
        res.send(userinfo)
    }
}

export default new User()