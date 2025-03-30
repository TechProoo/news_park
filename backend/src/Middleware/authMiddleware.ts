import { Response, Request, NextFunction } from "express";
import { httpResponse } from "../Config/errorConfig";
import jwt, { JwtPayload } from "jsonwebtoken";
import { ENV } from "../Config/env";

export interface AuthRequest extends Request {
  user?: JwtPayload & { id: string; username: string }; // Add `id` and `username`
}

export const authenticate = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): void => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    httpResponse(400, "Token not provided", null, res);
    return;
  }

  try {
    const decoded = jwt.verify(token, ENV.JWT_SECRET) as JwtPayload & {
      id: string;
      username: string;
    };
    req.user = decoded;
    next();
  } catch (error) {
    httpResponse(403, "Invalid token", error, res);
  }
};
