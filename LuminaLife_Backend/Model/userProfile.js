import { DataTypes } from "sequelize";
import {db} from "../Database/mySql.js"

const userProfile = db.define("userProfile",
    {
        id: {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true
        },
        Profile : {
            type : DataTypes.STRING,
            allowNull : true
        },
        Name : {
            type : DataTypes.STRING,
            allowNull : true
        },
        Age : {
            type : DataTypes.INTEGER,
            allowNull : true
        },
        DOB : {
            type : DataTypes.STRING,
            allowNull : true
        },
        Gender : {
            type : DataTypes.STRING,
            allowNull : true
        },
        Bio : {
            type : DataTypes.STRING,
            allowNull : true
        }
    }
)

export default userProfile