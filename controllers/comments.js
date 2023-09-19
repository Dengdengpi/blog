const Comment = require('../models/Comment')

const createComment = async (req, res) => {
    const {blog, user_info} = req.body;
    if (!blog || !user_info) {
      res.status(400);
      throw new Error("Provide required fields please")
    }
    try{
      let comment = await Comment.create({...req.body});
      res.json(comment);
    } catch (err) {
      res.status(400);
      throw new Error(err.message);
    }
  };

  module.exports = {
    createComment
  }
  