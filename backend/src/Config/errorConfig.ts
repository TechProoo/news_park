import { HttpResponse } from "../Utils/types";

export const httpResponse: HttpResponse = (status, message, data, res) => {
  return res.status(status).json({
    message,
    data,
  });
};
