import express from "express"
import {signUp} from "../Controller/userController.js"

const router = express.Router()

router.post("/registerUser", signUp)

