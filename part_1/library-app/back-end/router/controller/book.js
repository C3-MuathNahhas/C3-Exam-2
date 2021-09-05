const bookModel = require("../../model/book");

const newBook = (req, res) => {
  const { title, author, pages, publisher, published_at } = req.body;

  const add = new bookModel({
    title,
    author,
    pages,
    publisher,
    published_at,
  });
  add
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        book: result,
      });
    })
    .catch((err) => {
      res.status(404).json({
        success: false,
        massage: err,
      });
    });
};

const allbook = (req, res) => {
  bookModel
    .find()
    .then((result) => {
      res.status(201).json({
        success: true,
        AllBook: result,
      });
    })
    .catch((err) => {
      res.status(404).json({
        success: false,
        massage: err,
      });
    });
};
module.exports = { newBook, allbook };
