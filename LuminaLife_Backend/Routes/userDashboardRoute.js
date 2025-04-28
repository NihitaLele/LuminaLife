import express from "express";
import Auth from "../Middlewares/Authentication.js"
import {addTodo, addMood, addWater, addSleep, showDashboard, showProfile} from "../Controller/dashboardController.js";


const router = express.Router();

router.post("/addTodo", Auth, addTodo)
router.post("/addMood", Auth, addMood)
router.post("/addWater", Auth, addWater)
router.post("/addSleep", Auth, addSleep)
router.get("/showDashboard", Auth, showDashboard)
router.get("/showProfile", Auth, showProfile)


export default router