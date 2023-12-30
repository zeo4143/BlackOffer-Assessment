import { getAllData } from "../controllers/mockdata/getters.js"
import { postdata } from "../controllers/mockdata/setters.js"


const mockdata = (routes) => {
    routes.get("/getAllData", getAllData)
    routes.post("/postData", postdata)

}

export {mockdata}