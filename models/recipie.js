const mongoose = require('mongoose')

const recipieSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    sub_category: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    prep_time:  {
        type: Number
    },
    cook_time: {
        type: Number,
    },
    ingredients: {
        type: Array,
        required: true
    },
    directions: {
        type: String,
        required: true
    },
    image_url: {
        type: String
    },
    comments: {
        type: Array
    },
})

module.exports = mongoose.model('Recipie', recipieSchema)