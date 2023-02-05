const Contact = require("../schema/contactSchema")

const deleteContact = async (req, res) => {
    try {
        const { id } = req.params
        if (!id) {
            return res.status(400).json({ message: "An id is required" })
        }
        await Contact.deleteMany({})
        res.status(200).json({ message: "Deleted successfully" })
    } catch (error) {
        res.status(500).json({ message: "An error occurred" })
    }
}

module.exports = deleteContact