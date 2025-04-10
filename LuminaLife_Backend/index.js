import express from "express"
import { db } from "./Database/mySql.js";
import  User  from "./Model/userModel.js";
import cors from "cors"
import userRoute from "./Routes/userRoutes.js"
import bodyParser from "body-parser";


const app = express();

app.use(cors())

app.use(bodyParser.json())

db.sync()
// db.sync({ force: true })

app.use(userRoute)

app.listen(3000)

