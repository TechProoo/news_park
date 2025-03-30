import { Router } from "express";
import authRoutes from "./authRoutes";
import postRoutes from "./postRoute";
import userRoutes from "./userRoute";

const router = Router();

router.use("/auth", authRoutes);
router.use("/blog", postRoutes);
router.use("/user", userRoutes);

export default router;
