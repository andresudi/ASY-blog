const Article = require('../models/article')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const createArticle = (req, res) => {
    let decoded = jwt.verify(req.headers.token, process.env.jwt_secret)
    console.log(decoded)
    Article.create({
        title: req.body.title,
        description: req.body.description,
        UserId: decoded.id,
        image: image
    })
    .then((data) => {
        res.status(201).json({
            message: `successfully create article`,
            data
        })
    })
    .catch((err) => {
        res.status(400).json({
            message: err.message
        })
    })
}

const getArticle = (req, res) => {
    Article.find({})
    .populate('UserId')
    .then((data) => {
        res.status(201).json({
            message: `successfully create article`,
            data
        })
    })
    .catch((err) => {
        res.status(400).json({
            message: err.message
        })
    })
}

const getOneArticle = (req, res) =>{
    Article.findOne({_id: req.params.id})
    .populate('UserId')
    .then((article) => {
        res.status(201).json({
            message: `articles with UserId`,
            data: article
        })
    })
    .catch((err) => {
        res.status(400).json({
            message: err.message
        })
    });
}

const getMyArticle = (req, res) => {
    let token = req.headers.token
    let decoded = jwt.verify(token, process.env.JWT_SECRET)
    Article.find({
        userId: decoded.id
    }).populate('UserId')
        .then((data) => {
            res.status(201).json({
                message: `my articles`,
                data
            })
        })
        .catch((err) => {
            res.status(400).json({
                message: err.message
            })
        });
}

const editArticle = (req, res) => {
    const { title, description } = req.body
    Article.updateOne({
        _id: req.params.id
    }, {
        title: title,
        description: description
    })
    .then(() => {
        res.status(201).json({
            message: `success update article`
        })
    })
    .catch((err) => {
        res.status(400).json({
            message: err.message
        })
    })
}

const deleteArticle = (req, res) => {
    Article.deleteOne({_id: req.params.id})
    .then(() => {
        res.status(201).json({
            message: `success delete article`
        })
    })
    .catch((err) => {
        res.status(400).json({
            message: err.message
        })
    })
}

const addComment = (req, res) => {
    const { comment } = req.body
    let token = req.headers.token
    let decoded = jwt.verify(token, process.env.JWT_SECRET)
    Article.update({
        _id: req.params.id
    }, {
        $push: { comments: {UserId: decoded.id, name: decoded.name, comment: comment, date: new Date ()} }
    })
    .then(() => {
        res.status(201).json({
            message: `success add comment`
        })
    })
    .catch((err) => {
        res.status(400).json({
            message: err.message
        })
    });
}

const deleteComment = (req,res) => {
    Article.update({
        _id: req.params.id
    },{
        $pull: { comments: {_id: req.body.id_comment}}
    })
    .then(() => {
        res.status(201).json({
            message: `success delete comment`
        })
    })
    .catch((err) => {
        
    });
}

module.exports = {
    createArticle,
    getArticle,
    editArticle,
    deleteArticle,
    getMyArticle,
    getOneArticle,
    addComment,
    deleteComment
}