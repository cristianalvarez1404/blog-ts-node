/**
 * Node modules
 */
import { Router } from "express";
import { param, query, body } from "express-validator";

/**
 * Middlewares
 */
import authenticate from "@/middlewares/authenticate";
import validationError from "@/middlewares/validationError";
import authorize from "@/middlewares/authorize";

/**
 * Controllers
 */
import createBlog from "@/controllers/v1/blog/create_blog";

/**
 * Models
 */
import User from "@/models/user";

const router = Router();

router.post("/", authenticate, authorize(["admin", "user"]), createBlog);

export default router;
