const vcard = require("vcard-json");
const Contact = require("../schema/contactSchema");
const fs = require("fs")

const uploadContact = (req, res) => {
    try {
        const file = req.file
        vcard.parseVcardFile(`./uploads/${file.filename}`, async (err, data) => {
            if (err) {
                console.log(err);
            } else {
                const contacts = data.map((contact) => {
                    return {
                        firstName: contact.fullname,
                        phoneNumber: contact.phone[0].value
                    }
                })
                await Contact.insertMany(contacts)
            }
        })
        fs.unlink(`./uploads/${file.filename}`, (err) => {
            if (err) {
                console.log(err);
            }
        })
        res.status(200).json({ message: "Uploaded successfully" })
    } catch (error) {
        res.status(500).json({ message: "An error occurred" })
        console.log(error);
    }
}

module.exports = uploadContact