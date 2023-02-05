const Contact = require("../schema/contactSchema")

const getContact = async (req, res) => {
    try {
        const contact = await Contact.find({})
        res.status(200).json(contact)
    } catch (error) {
        res.status(500).json({ message: "An error occurred" })
    }
}

module.exports = getContact