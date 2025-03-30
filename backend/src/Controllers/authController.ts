import { NextFunction, Request, Response } from "express";
import { httpResponse } from "../Config/errorConfig";
import client from "../Config/dbConnection";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { ENV } from "../Config/env";

export const signUp = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { username, email, password } = req.body;
    console.log("Sign-up request body:", req.body); // Debugging line
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await client.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (existingUser.rows.length > 0) {
      return httpResponse(400, "User already exists", null, res);
    }

    const hashed = await bcrypt.hash(password, 10);

    const newUser = await client.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
      [username, email, hashed]
    );

    return httpResponse(
      201,
      "User created successfully",
      { user: newUser.rows[0] },
      res
    );
  } catch (err) {
    console.error("Sign-up error:", err);
    return httpResponse(500, "Error creating user", null, res);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { email, password } = req.body;

  try {
    const user = await client.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (user.rows.length === 0) {
      return httpResponse(400, "User not found", null, res);
    }

    const hashedPassword = user.rows[0].password;
    const isPasswordValid = await bcrypt.compare(password, hashedPassword);

    if (!isPasswordValid) {
      return httpResponse(400, "Incorrect Password", null, res);
    }

    if (!ENV.JWT_SECRET) {
      console.error("JWT_SECRET is not defined");
      return httpResponse(500, "Internal Server Error", null, res);
    }

    const token = jwt.sign(
      { id: user.rows[0].id, email: user.rows[0].email, username: user.rows[0].username },
      ENV.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return httpResponse(
      200,
      "Login successful",
      { token, user: user.rows[0] },
      res
    );
  } catch (error) {
    console.error("Login error:", error);
    next(error);
  }
};
