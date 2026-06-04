import jwt from "jsonwebtoken";

/**
 * Custom modules
 */
import config from "@/config";

/**
 * Types
 */
import { Types } from "mongoose";

export const generateAccessToken = (userId: Types.ObjectId) => {
  return jwt.sign({ userId }, config.JWT_ACCESS_SECRET, {
    expiresIn: config.ACCESS_TOKEN_EXPIRE,
    subject: "accessApi",
  });
};

export const generateRefreshToken = (userId: Types.ObjectId) => {
  return jwt.sign({ userId }, config.JWT_REFRESH_SECRET, {
    expiresIn: config.REFRESH_TOKEN_EXPIRE,
    subject: "refreshToken",
  });
};
