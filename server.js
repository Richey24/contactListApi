const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose");
const contactRoutes = require("./routes/contactRoutes")
require("dotenv").config({ path: ".env" })
mongoose.set('strictQuery', false);

const app = express()
const port = process.env.PORT || 5000
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

try {
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    app.listen(port, () => console.log(`listening at ${port}`));
} catch (error) {
    console.log(error);
}

app.get("/", (req, res) => res.send("Hello world"))
app.use("/contact", contactRoutes)
