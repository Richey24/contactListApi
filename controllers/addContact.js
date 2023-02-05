const Contact = require("../schema/contactSchema")

const addContact = async (req, res) => {
    try {
        const body = req.body
        if (!body.firstName || !body.phoneNumber) {
            return res.status(400).json({ message: "First name and Phone number is required" })
        }
        await Contact.create(body)
        res.status(201).json({ message: "Created successfully" })
    } catch (error) {
        res.status(500).json({ message: "An error occurred" })
    }
}

module.exports = addContact