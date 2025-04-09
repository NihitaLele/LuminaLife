import { DataTypes } from "sequelize";
import { db } from "../Database/mySql.js";

export const User = db.define("User",

    {
        id : {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true
        },
        Name : {
            type : DataTypes.STRING,
            allowNull : true
        },
        Email : {
            type : DataTypes.STRING,
            unique : true,
            allowNull : true
        },
        Password : {
            type : DataTypes.STRING,
            allowNull : true
        }
    }
)

