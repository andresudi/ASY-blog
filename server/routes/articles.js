var express = require('express');
var router = express.Router();
const {
    createArticle,
    getArticle,
    editArticle,
    deleteArticle,
    getMyArticle,
    getOneArticle,
    addComment,
    deleteComment
} = require('../controllers/articleController')
const isLogin = require('../middlewares/isLogin')
const images = require('../helpers/image.js')

router.post('/upload',
  images.multer.single('image'), 
  images.sendUploadToGCS,
  (req, res) => {
    res.send({
      status: 200,
      message: 'Your file is successfully uploaded',
      link: req.file.cloudStoragePublicUrl
    })
  }
)

router.get('/', getArticle)
router.post('/', isLogin, createArticle)
router.put('/:id', isLogin, editArticle)
router.delete('/:id', isLogin, deleteArticle)

router.get('/myarticle', isLogin, getMyArticle)
router.get('/:id', getOneArticle)

router.put('/comment/:id', isLogin, addComment)
router.put('/comment/:id/delete', isLogin, deleteComment)


module.exports = router
