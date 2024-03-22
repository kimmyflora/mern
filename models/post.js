const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const commentSchema = new Schema({
  content:{
    type: String,
    required: true
  },

  username: String,
  
  

  

})

// One a user has many posts 
// A post belongs to a User
const postSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  photoUrl: String,
  caption: String,
  businessType: {
    type: String,
    enum: ['Restaurants', 'Services', 'Other']
  },
  comments:[commentSchema]
 
});









module.exports = mongoose.model("Post", postSchema);