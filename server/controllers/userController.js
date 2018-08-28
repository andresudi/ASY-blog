const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config()

const getAllUser = (req,res) => {
    User.find({})
    .then((data) => {
        if (data.length == 0) {
            res.status(200).json({
                message: `cannot get users data`,
                data
            })
        } else {
            res.status(200).json({
                message: `succes get all users`,
                data
            })
        }
    }) 
    .catch((err) => {
        res.status(400).json({
            message: `Something is wrong`,
            err
        })
    })
}

const getOneUser = (req, res) => {
    User.findOne({ _id: req.params.id }) 
    .then((data) => {
        res.status(200).json({
            message: `get user data with id ${req.params.id}`,
            data
        })
    })
    .catch((err) => {
        res.status(400).json({
            message: `cannot get a user data`,
            err
        })
    })
}

const deleteUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
    .then((data) => {
        res.status(200).json({
            message: `User succesfully deleted`,
            data
        })
    })
    .catch((err) => {
        res.status(400).json({
            err
        })
    })
}

const register = (req,res) => {
    const { username, email, password } = req.body
    if (password == undefined || password.length == 0) {
        res.status(200).json({
            message: `Password is required`
        })
    } 
    User.create({
        username: username,
        email: email,
        password: password
    })
    .then((data) => {
        if (data) {
            res.status(201).json({
                message: `Successfully registered!`,
                data
            })
        } else {
            res.status(201).json({
                message: 'Please input your name, email and password'
            })
        }
    })
    .catch((err) => {
        res.status(400).json({
            message: err.message,
        })
    })
}

const login = (req, res) => {
    const { email, password } = req.body
    User.findOne({
        email: email
    })
    .then((data) => {
        if(data) {
            let passwordCheck = bcrypt.compareSync(password, data.password)
            if (passwordCheck) {
                let token = jwt.sign({
                    id: data._id,
                    name: data.username,
                    email: data.email
                }, process.env.jwt_secret)
                res.status(200).json({
                    message: `Successfully login`,
                    token
                })
            } else {
                res.status(200).json({
                    message: `password is invalid`
                })
            } 
        } else {
            res.status(200).json({
                message: `email is invalid`
            })
        }
    })
    .catch((err) => {
        res.status(400).json({
            message: err.message
        })
    })
}

module.exports = {
    getAllUser,
    getOneUser,
    deleteUser,
    register,
    login
}