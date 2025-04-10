import express from "express"
import {signUp} from "../Controller/userController.js"
import { login } from "../Controller/userController.js"

 const router = express.Router()

router.post("/registerUser", signUp)
router.post("/loginUser", login)
router.post

export default router