import express, { Router } from "express";
import {
  deletePost,
  getAllPosts,
  getPosts,
  getPostsTitle,
  postBlog,
} from "../Controllers/posts";
import { upload } from "../Middleware/Multer";
import { authenticate } from "../Middleware/authMiddleware";

const router = express.Router();

router.post(
  "/create",
  authenticate,
  upload.single("file"),
  async (req, res, next) => {
    try {
      await postBlog(req, res);
    } catch (error) {
      next(error);
    }
  }
);

router.get("/allpost", async (req, res, next) => {
  try {
    await getAllPosts(req, res);
  } catch (error) {
    next(error);
  }
});

router.get("/posts/:id", async (req, res, next) => {
  try {
    await getPosts(req, res);
  } catch (error) {
    next(error);
  }
});

router.get("/posts/content/:id", async (req, res, next) => {
  try {
    await getPostsTitle(req, res);
  } catch (error) {
    next(error);
  }
});

router.delete("/delete/:id", authenticate, async (req, res, next) => {
  try {
    await deletePost(req, res);
  } catch (error) {
    next(error);
  }
});

export default router;
