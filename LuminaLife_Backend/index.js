import express from "express"
import { db } from "./Database/mySql.js";
import { User } from "./Model/userModel.js";


const app = express();

db.sync()

app.listen(3000)

