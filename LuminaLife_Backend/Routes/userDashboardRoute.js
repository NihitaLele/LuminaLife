import express from "express";
import Auth from "../Middlewares/Authentication.js"
import addTodo from "../Controller/dashboardController.js";

const router = express.Router();

router.post("/addTodo", Auth, addTodo)

export default router