const express = require("express")
const addContact = require("../controllers/addContact")
const deleteContact = require("../controllers/deleteContact")
const getContact = require("../controllers/getContact")
const updateContact = require("../controllers/updateContact")
const uploadContact = require("../controllers/uploadContact")
const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "uploads/")
    },
    filename: (req, file, callback) => {
        file.filename = "contact.vcf"
        callback(null, "contact.vcf")
    }
})
const upload = multer({ storage: storage })

const contactRoutes = express.Router()

contactRoutes.get("/get/all", getContact)
contactRoutes.post("/add", addContact)
contactRoutes.post("/upload", upload.single("contact"), uploadContact)
contactRoutes.put("/update/:id", updateContact)
contactRoutes.delete("/delete/:id", deleteContact)

module.exports = contactRoutes