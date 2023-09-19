require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();

const connectDB = require('./db/connect');
// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

const authorRouter = require('./routes/author');
const blogRouter = require('./routes/blog');
const commentRouter = require('./routes/comment');


app.use(express.json());
// extra packages

// routes
app.use('/author', authorRouter);
app.use('/blog', blogRouter);
app.use('/comment', commentRouter);



app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    const server = app.listen(8000, () =>
      console.log(`Server is listening on port 8000...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
module.exports = app;
