import { Sequelize } from "sequelize";
import { config } from "dotenv";
config();

export const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    port: process.env.DB_PORT,
    logging: false,
    dialectOptions: {
      ssl: true // optional, only if needed
    },
    pool: {
      max: 10,
      min: 0,
      acquire: 60000,
      idle: 5000,
    },
  }
);
