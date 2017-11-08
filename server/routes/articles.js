const express = require('express')
const router = express.Router()
const article = require('../controller/articleController')
const aut = require('../helper/aut')

router.post('/', aut.login, article.create)
router.get('/', article.all)
router.get('/:id', article.findById)
router.put('/:id', aut.login, article.update)
router.delete('/:id', aut.login, article.remove)

module.exports = router
