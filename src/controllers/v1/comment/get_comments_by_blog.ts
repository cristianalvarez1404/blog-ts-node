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
import Blog from "@/models/blog";
import Comment from "@/models/comment";

/**
 * Types
 */
import type { Request, Response } from "express";
import comment from "@/models/comment";

const getCommentsByBlog = async (req: Request, res: Response) => {
  const { blogId } = req.params;

  try {
    const blog = await Blog.findById(blogId).select("_id").lean().exec();

    if (!blog) {
      res.status(404).json({
        code: "NotFound",
        message: "Blog not found ",
      });
      return;
    }

    const allComments = await Comment.find({ blogId: blog._id })
      .sort({ createdAt: -1 })
      .lean()
      .exec();

    res.status(200).json({
      comments: allComments,
    });
  } catch (err) {
    res.status(500).json({
      code: "ServerError",
      message: "Internal server error",
      error: err,
    });

    logger.error("Error retrieving comments", err);
  }
};

export default getCommentsByBlog;
