const express = require('express')
const router = express.Router();
const commentsCtrl = require('../controllers/comments')


//router to update a tip
router.put('/comments/:id', commentsCtrl.update)

//router to create a new tip for the interview post 
router.post('/posts/:id/comments', commentsCtrl.create)

//router to be able to delete 
router.delete('/comments/:id', commentsCtrl.delete)

module.exports = router;