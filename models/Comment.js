const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema(
  {
    blog: {
        type: mongoose.Types.ObjectId,
        ref: 'Blog'
      },
    user_info: {
      type: mongoose.Types.ObjectId,
      ref: 'Author'
    },
  }
)

module.exports = mongoose.model('Comment', CommentSchema);