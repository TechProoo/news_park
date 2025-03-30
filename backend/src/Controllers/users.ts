import { Response, Request } from "express";
import { httpResponse } from "../Config/errorConfig";
import client from "../Config/dbConnection";
import { AuthRequest } from "../Middleware/authMiddleware";

export const getUsers = async (req: AuthRequest, res: Response) => {
  try {
    const user = await client.query("SELECT * FROM users ");
    console.log(user.rows[0]);

    if (user.rows.length === 0) {
      return httpResponse(404, "User not found", null, res);
    }

    return httpResponse(200, "User retrieved successfully", user.rows[0], res);
  } catch (error) {
    console.error("Error retrieving user:", error);
    return httpResponse(500, "Internal server error", null, res);
  }
};

export const getUserPosts = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const userId = req.user.id;

    const posts = await client.query("SELECT * FROM posts WHERE user_id = $1", [
      userId,
    ]);

    if (posts.rows.length === 0) {
      return httpResponse(404, "No posts found for this user", null, res);
    }

    return httpResponse(
      200,
      "Posts retrieved successfully",
      [posts.rows, req.user],
      res
    );
  } catch (error) {
    console.error("Error retrieving user posts:", error);
    return httpResponse(500, "Internal server error", null, res);
  }
};
