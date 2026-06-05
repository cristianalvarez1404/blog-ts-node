/**
 * Node modules
 */
import { Router } from "express";
const router = Router();

/**
 * Routes
 */
import authRoutes from "@/routes/v1/auth";
import userRoutes from "@/routes/v1/user";

/**
 * Root route
 */

router.get("", (req, res, next) => {
  return res.status(200).json({
    message: "Welcome to my app 🧨🧨✨!",
    status: "ok",
    version: "1.0.0",
    timestamp: new Date().toISOString(),
  });
});

router.use("/auth", authRoutes);
router.use("/users", userRoutes);

export default router;
