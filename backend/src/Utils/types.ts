import { Response } from "express";

export interface HttpResponse {
  (status: number, message: string, data: any, res: Response): Response;
}
