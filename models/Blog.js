const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide title'],
      maxlength: 30,
      minlength: 5,
      trim: true
    },
    content: {
        type: String,
        required: [true, 'Please provide content'],
        maxlength: 100,
        minlength: 5,
        trim: true
      },
    author: {
      type: mongoose.Types.ObjectId,
      ref: 'Author'
    },
  }
)

module.exports = mongoose.model('Blog', BlogSchema);