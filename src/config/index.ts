import dotenv from "dotenv";
dotenv.config();

/**
 * Types
 */
import type ms from "ms";

const config = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV!,
  WHITELIST_ORIGINS: ["https://localhost:5000"],
  MONGO_URI: process.env.MONGO_URI!,
  LOG_LEVEL: process.env.LOG_LEVEL || "info",
  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET!,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET!,
  ACCESS_TOKEN_EXPIRE: process.env.ACCESS_TOKEN_EXPIRE! as ms.StringValue,
  REFRESH_TOKEN_EXPIRE: process.env.REFRESH_TOKEN_EXPIRE! as ms.StringValue,
  WHITELIST_ADMINS_MAIL: [
    "user@gmail.com",
    "user1@gmail.com",
    "user2@gmail.com",
  ],
};

export default config;
