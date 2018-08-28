const jwt = require("jsonwebtoken");
const User = require('../models/user')

var isLogin = (req, res, next) => {
    let token = req.headers.token
    let decode = jwt.verify(token, process.env.jwt_secret)
    if(token){
        User.findOne({email: decode.email})
        .then((data) => {
            if(data){
                next()
            }else{
                res.status(400).json({
                    message: 'User is not Authenticated'
                })
            }
        }).catch((err) => {
            res.status(400).json({
                message: err.message
            })
        });
        
    }else{
        res.status(400).json({
            msg: `no token`
        })
    }
}

module.exports = isLogin
