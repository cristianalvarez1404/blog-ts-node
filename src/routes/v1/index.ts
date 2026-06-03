import { Router } from "express";

const router = Router();

router.get("", (req, res, next) => {
  return res.status(200).json({
    message: "Welcome to my app 🧨🧨✨!",
    status: "ok",
    version: "1.0.0",
    timestamp: new Date().toISOString(),
  });
});

export default router;
