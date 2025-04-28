import express from "express";
import Auth from "../Middlewares/Authentication.js"
import {addTodo, addMood, addWater, addSleep} from "../Controller/dashboardController.js";


const router = express.Router();

router.post("/addTodo", Auth, addTodo)
router.post("/addMood", Auth, addMood)
router.post("/addWater", Auth, addWater)
router.post("/addSleep", Auth, addSleep)



export default router