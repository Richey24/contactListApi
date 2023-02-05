const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    surname: {
        type: String
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
})

const Contact = mongoose.model("Contact", contactSchema, "contact")

module.exports = Contact