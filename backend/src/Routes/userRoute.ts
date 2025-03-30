import { Router } from "express";
import { authenticate } from "../Middleware/authMiddleware";
import { getUserPosts, getUsers } from "../Controllers/users";

const router = Router();

router.get("/user_info", authenticate, async (req, res, next) => {
  try {
    await getUsers(req, res);
  } catch (error) {
    next(error);
  }
});

router.get("/user_posts", authenticate, async (req, res, next) => {
  try {
    await getUserPosts(req, res);
  } catch (error) {
    next(error);
  }
});

export default router;
