
const PostModel =required('../models/post')

module.exports = {
    create,
    delete: deleteOne,
    update 
}

//function to update a comment

async function update(req, res) {
    // Note the cool "dot" syntax to query on the property of a subdoc
    const comment = await PostModel.findOne({ 'comments._id': req.params.id });
    // Find the tip subdoc using the id method on Mongoose arrays
    // https://mongoosejs.com/docs/subdocs.html
    const commentsSubdoc = post.comments.id(req.params.id);
    console.log(commentsSubdoc, "THIS IS COMMENTSDOCS") //testing to see if it works 
    console.log(req.body, "THIS IS REQ.BODY") //testing to see if it works 
    // Ensure that the content was created by the logged in user
    if (!post) return res.redirect('/posts')
    // Update the tip of the content
    commentsSubdoc.content = req.body.text;
    try {
        await post.save();
    } catch (e) {
        console.log(e.message);
    }
    // Redirect back to show view
    res.redirect(`/posts/${post._id}`);
}

// function for delete
//function to delete the new tip
async function deleteOne(req, res) {
    try {
        const postDoc = await PostModel.findOne({ 'comments._id': req.params.id, 'comments.user': req.user._id })
        if (!postDoc) return res.redirect('/posts')
        postDoc.tips.remove(req.params.id)
        postDoc.save()
        res.redirect(`/posts/${postDoc._id}`)
    } catch (err) {
        console.log(err)
        res.send(err)
    }

}

//function to create a new comment 
async function create(req, res) {

    try {
        const postDoc = await PostModel.findById(req.params.id)
        req.body.user = req.user._id
        req.body.userName = req.user.name
        req.body.userAvatar = req.user.avatar

        postDoc.comments.push(req.body);
        await postDoc.save()
        res.redirect(`/posts/${req.params.id}`)
        
    } catch (err) {
        console.log(err)
        res.send(err)
    }
}