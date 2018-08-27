var express = require('express');
var router = express.Router();
const {    
  getAllUser,
  getOneUser,
  deleteUser,
  register,
  login
} = require('../controllers/userController')

router.get('/', getAllUser)
router.get('/:id', getOneUser)
router.post('/register', register)
router.post('/login', login)
router.delete('/:id', deleteUser)

module.exports = router;
