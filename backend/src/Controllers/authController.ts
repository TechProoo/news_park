import { Request, Response } from "express";
import { httpResponse } from "../Config/errorConfig";
import client from "../Config/dbConnection";
import bcrypt from "bcryptjs";

export const signUp = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await client.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (existingUser.rows.length > 0) {
      return httpResponse(400, "User already exists", null, res);
    }

    const hashed = await bcrypt.hash(password, 10);

    // Insert new user and return the newly created user
    const newUser = await client.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
      [username, email, hashed]
    );

    return httpResponse(201, "User created successfully", newUser.rows[0], res);
  } catch (err) {
    console.error("Sign-up error:", err);
    return httpResponse(500, "Error creating user", null, res);
  }
};
