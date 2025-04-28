import { DataTypes } from "sequelize";
import {db} from "../Database/mySql.js"

const userProfile = db.define("userProfile",
    {
        id: {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true,
            unique : true
        },
        Profile : {
            type : DataTypes.STRING,
            allowNull : false
        },
        Name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        Age : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        DOB : {
            type : DataTypes.STRING,
            allowNull : false
        },
        Gender : {
            type : DataTypes.STRING,
            allowNull : false
        },
        Bio : {
            type : DataTypes.STRING,
            allowNull : false
        },
        Interests : {
            type : DataTypes.STRING,
            allowNull : false
        }
    }
)

export default userProfile