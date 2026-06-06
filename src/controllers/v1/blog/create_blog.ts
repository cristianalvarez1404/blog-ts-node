/**
 * Node modules
 */
import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";

/**
 * Custom modules
 */
import { logger } from "@/lib/winston";

/**
 * Models
 */
import User from "@/models/user";
import Blog from "@/models/blog";

/**
 * Types
 */
import type { Request, Response } from "express";
import type { IBlog } from "@/models/blog";

type BlogData = Pick<IBlog, "title" | "content" | "bannner" | "status">;

/**
 * Purify the blog content
 */
const window = new JSDOM("").window;
const purify = DOMPurify(window);

const createBlog = async (req: Request, res: Response) => {
  try {
  } catch (err) {
    res.status(500).json({
      code: "ServerError",
      message: "Internal server error",
      error: err,
    });

    logger.error("Error during blog creation", err);
  }
};

export default createBlog;
