import { Sequelize } from "sequelize";

export const db = new Sequelize("luminalife", "root", "n14@Lele_07#",{
    host : "localhost",
    dialect : "mysql"
})

// try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }

  


