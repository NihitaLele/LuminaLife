import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    port: process.env.DB_PORT || 5432,
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // ✅ fixes unexpected termination from SSL cert
      },
    },
    pool: {
      max: 10,
      min: 0,
      acquire: 60000,
      idle: 5000,
    },
  }
);
