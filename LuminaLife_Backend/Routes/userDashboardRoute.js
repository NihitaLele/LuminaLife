import express from "express";
import Auth from "../Middlewares/Authentication.js"
import {addTodo, addMood, addWater} from "../Controller/dashboardController.js";


const router = express.Router();

router.post("/addTodo", Auth, addTodo)
router.post("/addMood", Auth, addMood)
router.post("/addWater", Auth, addWater)


export default router