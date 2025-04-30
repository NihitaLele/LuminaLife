import { Sequelize } from "sequelize";
import { config } from 'dotenv';

config();


export const db = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD,{
    host:process.env.DB_HOST,
    dialect:"mysql",
    port:process.env.DB_PORT,
    logging: console.log, 
})

// try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }


  


