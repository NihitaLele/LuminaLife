import userDashboardModel from "../Model/userDashboardModel.js"
import userProfile from "../Model/userProfile.js";

export const addTodo = async(req, res) =>{
    try{
        console.log(req.body.todo)
        await userDashboardModel.update(
            { Todo : req.body.todo}, 
            { where: { UserId: req.user.id } }    
          );
          res.status(201).json({message : "Todo added"})
    }
    catch(error){
        console.log(error)
        res.status(500).json({message : "Sommething went wrong"})
    }
}

export const addMood = async(req, res) =>{
    try{
        await userDashboardModel.update(
            { CheckIn : req.body.emoji}, 
            { where: { UserId: req.user.id } }    
          );
          res.status(201).json({message : "Emoji added"})
    }
    catch(error){
        console.log(error)
        res.status(500).json({message : "Sommething went wrong"})
    }
}

export const addWater = async(req, res) =>{
    try{
        await userDashboardModel.update(
            { WaterIntake : req.body.ml}, 
            { where: { UserId: req.user.id } }    
          );
          res.status(201).json({message : "WaterIntake added"})
    }
    catch(error){
        console.log(error)
        res.status(500).json({message : "Sommething went wrong"})
    }
}

export const addSleep = async(req, res) =>{
    try{
        await userDashboardModel.update(
            { SleepTracker : req.body.hrs}, 
            { where: { UserId: req.user.id } }    
          );
          res.status(201).json({message : "SleepTracker added"})
    }
    catch(error){
        console.log(error)
        res.status(500).json({message : "Sommething went wrong"})
    }
}

export const showDashboard = async(req, res) =>{
    try{
         const dashboard = await userDashboardModel.findOne({where : {UserId : req.user.id}})
          res.status(201).json({dashboard})
    }
    catch(error){
        console.log(error)
        res.status(500).json({message : "Sommething went wrong"})
    }
} 

export const showProfile = async(req, res) =>{
    try{
         const profile = await userProfile.findOne({where : {UserId : req.user.id}})
          res.status(201).json({profile})
    }
    catch(error){
        console.log(error)
        res.status(500).json({message : "Sommething went wrong"})
    }
} 
