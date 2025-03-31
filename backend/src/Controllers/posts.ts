import { Request, Response } from "express";
import { httpResponse } from "../Config/errorConfig";
import client from "../Config/dbConnection";

export const postBlog = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return httpResponse(400, "No file was found", null, res);
    }

    const filePath = `/uploads/${req.file.filename}`;
    const {
      user_id,
      title,
      description,
      category,
      content,
      author,
      authorEmail,
    } = req.body;

    const tags = JSON.parse(req.body.tags);

    console.group(req.body);

    if (!user_id) {
      return httpResponse(400, "User ID is required", null, res);
    }

    const result = await client.query(
      "INSERT INTO posts (user_id, title, description, image, category, tags, content, author, author_email) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      [
        user_id,
        title,
        description,
        filePath,
        category,
        tags,
        content,
        author,
        authorEmail,
      ]
    );

    if (result.rows.length === 0) {
      return httpResponse(500, "Failed to insert post", null, res);
    }

    return httpResponse(201, "Post created successfully", result.rows[0], res);
  } catch (error) {
    console.log("Error posting blog:", error);
    return httpResponse(500, "Internal server error", null, res);
  }
};

export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const posts = await client.query("SELECT * FROM posts");

    if (posts.rows.length === 0) {
      return httpResponse(404, "No posts found", null, res);
    }

    return httpResponse(200, "Posts retrieved successfully", posts.rows, res);
  } catch (error) {
    console.error("Error retrieving posts:", error);
    return httpResponse(500, "Internal server error", null, res);
  }
};

export const getPosts = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return httpResponse(400, "User ID is required", null, res);
    }

    const result = await client.query(
      "SELECT * FROM posts WHERE user_id = $1",
      [id]
    );

    if (result.rows.length === 0) {
      return httpResponse(404, "No posts found for this user", null, res);
    }

    return httpResponse(200, "Posts retrieved successfully", result.rows, res);
  } catch (error) {
    console.error("Error retrieving posts:", error);
    return httpResponse(500, "Internal server error", null, res);
  }
};

export const getPostsTitle = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const title = req.query.title as string; // Get title from query params

    if (!id || !title) {
      return httpResponse(400, "User ID and title are required", null, res);
    }

    const decodedTitle = decodeURIComponent(title);

    const result = await client.query(
      "SELECT * FROM posts WHERE user_id = $1 AND title ILIKE $2",
      [id, decodedTitle]
    );

    if (result.rows.length === 0) {
      return httpResponse(404, "No posts found for this user", null, res);
    }

    return httpResponse(200, "Posts retrieved successfully", result.rows, res);
  } catch (error) {
    console.error("Error retrieving posts:", error);
    return httpResponse(500, "Internal server error", null, res);
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return httpResponse(400, "Post ID is required", null, res);
    }

    const result = await client.query(
      "DELETE FROM posts WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return httpResponse(404, "Post not found", null, res);
    }

    return httpResponse(200, "Post deleted successfully", result.rows[0], res);
  } catch (error) {
    console.error("Error deleting post:", error);
    return httpResponse(500, "Internal server error", null, res);
  }
};

export const incrementPost = async (req: Request, res: Response) => {
  const { postId } = req.body;

  try {
    const result = await client.query(
      "UPDATE posts SET views = views + 1 WHERE id = $1 RETURNING views",
      [postId]
    );
    httpResponse(201, "Updated Successfully", result.rows[0].views, res);
  } catch (err) {
    console.error(err);
    httpResponse(400, "Could'd update views", null, res);
  }
};
