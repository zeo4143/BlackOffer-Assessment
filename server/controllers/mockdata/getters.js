import { MockData } from "../../models/DataModel.js"


const getAllData = async (req, res) => {
    try {
        const response = await MockData.find()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error : error.message}) 
    }
}

export {getAllData}