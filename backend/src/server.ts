import express from "express";
import router from "./Routes/index";
import { errorHandler } from "./Middleware/errorMiddleware";
import { logger } from "./Middleware/logger";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;

app.use("/uploads", express.static("uploads"));

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);
app.use("/api", router);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
