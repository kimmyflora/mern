const express = require('express')
const router = express.Router();
const commentsCtrl = require('../../controllers/comments')


//router to create a new tip for the interview post 
router.post('/posts/:id/comments', commentsCtrl.create)


module.exports = router;