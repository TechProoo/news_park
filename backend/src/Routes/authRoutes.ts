import { Router } from "express";
import { login, signUp } from "../Controllers/authController";

const router = Router();

router.post("/register", async (req, res, next) => {
  try {
    await signUp(req, res);
  } catch (error) {
    next(error);
  }
});

router.post("/signUp", async (req, res, next) => {
  try {
    await login(req, res);
  } catch (err) {
    next(err);
  }
});

export default router;
