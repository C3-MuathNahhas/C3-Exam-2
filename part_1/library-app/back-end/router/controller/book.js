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
const bookById = (req, res) => {
  const id = req.params.id;
  bookModel
    .findOne({ id: id })
    .then((result) => {
      res.status(201).json({
        success: true,
        specificBook: result,
      });
    })
    .catch((err) => {
      res.status(404).json({
        success: false,
        massage: err,
      });
    });
};
const deletebook = (req, res) => {
  const id = req.params.id;
  bookModel
    .deleteOne({ id: id })
    .then(() => {
      res.status(201).json({
        success: true,
        BookDeleted: "book was deleted",
      });
    })
    .catch((err) => {
      res.status(404).json({
        success: false,
        massage: err,
      });
    });
};
module.exports = { newBook, allbook, bookById, deletebook };
