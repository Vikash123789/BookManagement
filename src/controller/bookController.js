const books = require('../bookCollection/BookCollection.js');
const bookModels = require('../models/bookmodels')

let AllBooksCollection = books;


// ------------------------------------------------------- GetBooks-------------------------------------------------------
let getBook = async function (req, res) {
    res.send(AllBooksCollection);
}


let bookById = async function (req, res) {
    const { id } =req.params
    
    let searchindb = await bookModels.findOne({isbn : id })
if(searchindb != null){
    return res.status(201).send({res : searchindb})
}else{
        const book = AllBooksCollection.find(b => b.isbn === id);
    if (!book) return res.status(404).send('Book does not exist');

   return res.status(201).send({book});
}};

// ---------------------------------------------------------------------CreateBook----------------------------------------
let createBook = async function (req, res) {
    const {
        title,
        isbn,
        pageCount,
        publishedDate,
        thumbnailUrl,
        shortDescription,
        longDescription,
        status,
        authors,
        categories
    } = req.body;

    const bookExist = await AllBooksCollection.find(b => b.isbn === isbn);
    if (bookExist) return res.send('Book already exist');

    const book = {
        title,
        isbn,
        pageCount,
        publishedDate,
        thumbnailUrl,
        shortDescription,
        longDescription,
        status,
        authors,
        categories
    };
   let createdbook = await bookModels.create(book) 

    return res.status(201).send({ status : true ,responce : book});
};


// ----------------------------------------------------------  UpdateBookField ----------------------------------------
const UpdateBook = async function (req, res) {
    const { id } = req.params;
    const {
        title,
        isbn,
        pageCount,
        publishedDate,
        thumbnailUrl,
        shortDescription,
        longDescription,
        status,
        authors,
        categories
    } = req.body;

    let book = AllBooksCollection.find(b => b.isbn === id);
    if (!book){ return res.status(404).send('Book does not exist');
}else{
    let findInDb = await bookModels.findOne({isbn : req.params})
    if(!findInDb){
       return res.send('Book does not exist')
    }
}

    const UpdateBookField = (val, prev) => !val ? prev : val;

    const updatedBook = {
        ...book,
        title: UpdateBookField(title, book.title),
        isbn: UpdateBookField(isbn, book.isbn),
        pageCount: UpdateBookField(pageCount, book.pageCount),
        publishedDate: UpdateBookField(publishedDate, book.publishedDate),
        thumbnailUrl: UpdateBookField(thumbnailUrl, book.thumbnailUrl),
        shortDescription: UpdateBookField(shortDescription, book.shortDescription),
        longDescription: UpdateBookField(longDescription, book.longDescription),
        status: UpdateBookField(status, book.status),
        authors: UpdateBookField(authors, book.authors),
        categories: UpdateBookField(categories, book.categories),
    };

    const bookIndex = AllBooksCollection.findIndex(b => b.isbn === book.isbn);
    AllBooksCollection.splice(bookIndex, 1, updatedBook);

    res.status(200).send(updatedBook);
};




// ---------------------------------------------------------------Delete-------------------------------------------
 const deleteBook = async function (req, res) {
    const { id } = req.params;

    let book = AllBooksCollection.find(b => b.isbn === id);
    if (!book) return res.status(404).send('Book does not exist');

    AllBooksCollection = AllBooksCollection.filter(b => b.isbn !== id);

    res.send('Success');
};

module.exports ={
    getBook,
    bookById,
    createBook,
    UpdateBook,
    deleteBook
}
