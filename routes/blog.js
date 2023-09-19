const express = require('express')

const router = express.Router()
const {
createBlog
} = require('../controllers/blogs')

router.route('/').post(createBlog);

module.exports = router
