const Author = require('../models/Author')

const createAuthor = async (req, res) => {
    const {name, email} = req.body;
    if (!name || !email) {
      res.status(400);
      throw new Error("Provide required fields please")
    }
    try{
      let author = await Author.create({...req.body});
      res.json(author)
    } catch (err) {
      res.status(400);
      throw new Error(err.message);
    }
  };

  module.exports = {
    createAuthor
  }