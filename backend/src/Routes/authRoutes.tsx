import { Router } from "express";
import { signUp } from "../Controllers/authController";

const router = Router();

router.post("/register", async (req, res, next) => {
  try {
    await signUp(req, res);
  } catch (error) {
    next(error);
  }
});

export default router;
