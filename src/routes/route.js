const express = require("express");
const router = express.Router();
const bookController = require("../controller/bookController.js");


//API 
router.get('/books',bookController.getBook)
router.get('/books/:id',bookController.bookById)
router.post('/books',bookController.createBook)
router.put('/books/:id',bookController.UpdateBook)
router.delete('/books/:id',bookController.deleteBook)





module.exports = router;