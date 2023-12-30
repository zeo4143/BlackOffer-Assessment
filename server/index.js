import express from "express"
import cors from "cors"
import {} from "dotenv/config.js"
import { connect } from "mongoose"
import { mockdata } from "./routers/mockdata.js"


const app = express()
const URI = process.env.MONGO_URI
const PORT = process.env.PORT || 8000


app.use(cors())
app.use(express.json())

mockdata(app)

connect(URI).then(() => {
    console.log("Connected TO DB");
    app.listen(PORT, (error) => {
        error ? console.log(error) : console.log(`Server Started on ${PORT}`);;
    })
})