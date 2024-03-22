
const Post = require('../models/post')

module.exports = {
    create,

     
}

// function for create 
async function create(req, res){
 
    try {
        const post = await Post.findById(req.params.id);
        post.comments.push({username: req.user.username, content: req.user.username}); //mutating a document
        await post.save()// save it
        res.status(201).json({data: 'comment added'})
    } catch(err){
       
        res.status(400).json({err})
    }
    
}

