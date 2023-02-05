const Contact = require("../schema/contactSchema")

const updateContact = async (req, res) => {
    try {
        const { id } = req.params
        const body = req.body
        if (!body.firstName || !body.phoneNumber) {
            return res.status(400).json({ message: "First name and Phone number is required" })
        }
        if (!id) {
            return res.status(400).json({ message: "An id is required" })
        }
        await Contact.findByIdAndUpdate(id, body)
        res.status(200).json({ message: "Updated successfully" })
    } catch (error) {
        res.status(500).json({ message: "An error occurred" })
    }
}

module.exports = updateContact