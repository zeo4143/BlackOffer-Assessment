import { MockData } from "../../models/DataModel.js"



const postdata = async (req, res) => {
    try {
        const data = req.body
        const saveData = new MockData(data)
        const response = await saveData.save()
        res.status(200).json(response)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}

export {postdata}