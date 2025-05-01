import express from "express"
import { db } from "./Database/mySql.js";
import  User  from "./Model/userModel.js";
import cors from "cors"
import userRoute from "./Routes/userRoutes.js"
import bodyParser from "body-parser";
import userProfile from "./Model/userProfile.js";
import photoUpload from "./Routes/photoUpload.js"
import userDashboard from "./Model/userDashboardModel.js"
import userDashboardRoute from "./Routes/userDashboardRoute.js"
import cron from 'node-cron';


const app = express();

app.use(cors())

app.use(bodyParser.json())

User.hasOne(userProfile)
userProfile.belongsTo(User)

User.hasOne(userDashboard)
userDashboard.belongsTo(User)



db.sync()

app.use(userRoute)
app.use(photoUpload)
app.use(userDashboardRoute)

cron.schedule('*/5 * * * *', () => {
    console.log('Backend active');
  });

app.listen(3000)

