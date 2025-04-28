import { DataTypes } from "sequelize";
import { db } from "../Database/mySql.js";

 const User = db.define("User",

    {
        id : {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true,
            unique : true
        },
        Name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        Email : {
            type : DataTypes.STRING,
            unique : true,
            allowNull : false
        },
        Password : {
            type : DataTypes.STRING,
            allowNull : false
        }
    }
)

export default User