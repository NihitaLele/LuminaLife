import userDashboardModel from "../Model/userDashboardModel.js"

const addTodo = async(req, res) =>{
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

export default addTodo