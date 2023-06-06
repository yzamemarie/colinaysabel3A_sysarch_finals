const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new Schema({
    //lastname
    lastName: {
        type: String,
        required: true,
        unique: false, 
        trim: true,
        minlength: 2
    },

    //firstname
    firstName: {
        type: String,
        required: true,
        unique: false, 
        trim: true,
        minlength: 2
    },

    //address
    address: {
        type: String,
        required: true,
        unique: false, 
        trim: true,
        minlength: 4
    },

    //user type
    type: {
        type: String,
        required: true,
        unique: false, 
        trim: true,
        minlength: 10
    },

    //contact number
    contactNo: {
        type: String,
        required: true,
        unique: false, 
        trim: true,
        minlength: 4
    },

    //email
    lastName: {
        type: String,
        required: true,
        unique: false, 
        trim: true,
        minlength: 4
    },

    //password
    password: {
        type: String,
        required: true,
        unique: false, 
        trim: true,
        minlength: 6
    },


})