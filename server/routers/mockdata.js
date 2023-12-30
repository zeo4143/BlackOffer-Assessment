import { getAllData } from "../controllers/mockdata/Gettets.js"
import { postdata } from "../controllers/mockdata/setter.js"


const mockdata = (routes) => {
    routes.get("/getAllData", getAllData)
    routes.post("/postData", postdata)

}

export {mockdata}