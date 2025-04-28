import { DataTypes } from "sequelize";
import { db } from "../Database/mySql.js";

const Dashboard = db.define("Dashboard",
    {
        id: {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true,
            unique : true
        },
        Todo : {
            type : DataTypes.JSON,
            allowNull : true
        },
        CheckIn : {
            type : DataTypes.STRING,
            allowNull : true
        },
        WaterIntake : {
            type : DataTypes.INTEGER,
            allowNull : true
        },
        SleepTracker : {
            type : DataTypes.INTEGER,
            allowNull : true
        }
    }
)

export default Dashboard