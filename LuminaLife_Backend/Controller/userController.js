import { where } from "sequelize"
import User from "../Model/userModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const signUp = async function (req, res) {
    try{
        const name = req.body.userName
        const email = req.body. userEmail
        const pass = req.body.userPassword

        const existedUser = await User.findOne({where : {Email : email}})

        if(existedUser){
            res.status(401).json({message : "User Already Exists"})
        }

        await bcrypt.hash(pass, 10, async(err, hash)=>{
            await User.create({
                Name : name,
                Email : email,
                Password : hash
            })
        })
        res.status(201).json({message: "User Registered"})
    }
    catch(error){
     res.status(500).json({message : "Something went wrong"})
     console.log(error)
  }
}

export const login = async(req, res)=>{
    try{
        const email = req.body.userEmail
        const pass = req.body.userPassword

        const user = await User.findOne({where : {Email : email}})
        if(user){
            bcrypt.compare(pass, user.dataValues.Password, async function (err, result) {
                if(result==true){
                    const token = jwt.sign({user}, "helllo")
                    res.status(200).json({token})
                }
                else{
                    res.status(500).json({message : "Incorrect password"})
                }
            })
        }
        else(res.status(404).json({message : "User Not Found"}))
    }
    catch(error){
        console.log(error)
    }
}