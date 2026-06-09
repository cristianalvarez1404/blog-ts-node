/**
 * Node modules
 */
import { v2 as cloudinary } from "cloudinary";

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

const deleteCurrentUser = async (req: Request, res: Response) => {
  const userId = req.userId;

  try {
    const blogs = await Blog.find({ author: userId })
      .select("banner.publicId")
      .lean()
      .exec();

    const publicIds = blogs.map(({ banner }) => banner.publicId);
    await cloudinary.api.delete_resources(publicIds);

    logger.info("Multiple blog banners deleted from Cloudinary", {
      publicIds,
    });

    await Blog.deleteMany({ author: userId });
    logger.info("Multiple blogs deleted", {
      userId,
      blogs,
    });

    await User.deleteOne({ _id: userId });
    logger.info("A user accout has been deleted", {
      userId,
    });

    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({
      code: "ServerError",
      message: "Internal server error",
      error: err,
    });

    logger.error("Error while deleting current acount", err);
  }
};

export default deleteCurrentUser;
