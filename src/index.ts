import express, { Request, Response } from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

const USER_EMAIL = process.env.USER_EMAIL || "";
const USER_NAME = process.env.USER_NAME || "";
const USER_STACK = process.env.USER_STACK || "";

app.get("/me", async (req: Request, res: Response) => {
  const timestamp = new Date().toISOString();

  let catFact = "";
  try {
    const { data } = await axios.get("https://catfact.ninja/fact", {
      timeout: 10000,
    });
    catFact = data.fact;
  } catch (error) {
    catFact =
      "Could not fetch a cat fact at this moment, please try again later.";
  }

  res.setHeader("Content-Type", "application/json");
  return res.status(200).json({
    status: "success",
    user: {
      email: USER_EMAIL,
      name: USER_NAME,
      stack: USER_STACK,
    },
    timestamp,
    fact: catFact,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
