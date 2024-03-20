const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const commentsSchema = new Schema({
  content:{
    type: String,
    required: true
  }
})

// One a user has many posts 
// A post belongs to a User
const postSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  photoUrl: String,
  caption: String,
  businessType: String,
  comments:[commentsSchema]
 
});









module.exports = mongoose.model("Post", postSchema);