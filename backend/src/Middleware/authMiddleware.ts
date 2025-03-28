import { Response, Request, NextFunction } from "express";
import { httpResponse } from "../Config/errorConfig";
import jwt from "jsonwebtoken";
import { ENV } from "../Config/env";

interface AuthRequest extends Request {
  user?: string;
}

export const authenticate = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    return httpResponse(400, "Token not provided", null, res);
  }

  try {
    const decoded = jwt.verify(token, ENV.JWT_SECRET);
    req.user = decoded as string;
    next();
  } catch (error) {
    return httpResponse(403, "Invalid token", error, res);
  }
};
