/**
 * Custom modules
 */
import { logger } from "@/lib/winston";

/**
 * Models
 */
import User from "@/models/user";

/**
 * Types
 */
import type { Request, Response } from "express";

const deleteCurrentUser = async (req: Request, res: Response) => {
  const userId = req.userId;

  try {
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
