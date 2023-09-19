const Blog = require('../models/Blog')

const createBlog = async (req, res) => {
    const {content, title, author} = req.body;
    if (!content || !title || !author) {
      res.status(400);
      throw new Error("Provide required fields please")
    }
    try{
      let blog = await Blog.create({...req.body});
      res.json(blog)
    } catch (err) {
      res.status(400);
      throw new Error(err.message);
    }
  };

  module.exports = {
    createBlog
  }
  