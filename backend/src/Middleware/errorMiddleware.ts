import { Request, Response, NextFunction } from "express";
import { httpResponse } from "../Config/errorConfig";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.message);
  httpResponse(500, "Internal Server Message", null, res);
};
