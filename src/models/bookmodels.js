const mongoose = require('mongoose')

const bookschema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        unique: true,
        trim: true

    },
    isbn: {
        type: String,
        required: true,
        trim: true
    },
    pageCount: {
        type: Number,
        required: true,
        trim: true
    },
    publishedDate: {
        type: String,
        required: true,
    },
    thumbnailUrl: {
        type: String,
        required: true,
        trim: true,
    },
    shortDescription: {
        type: String,

    },
    longDescription: {
        type: String,


    },
    status: {
        type: String,
    },
    authors: {
        type: String,
    },
    categories: {
        type: String,
    },
}, { timestamps: true })

module.exports = mongoose.model('book', bookschema)