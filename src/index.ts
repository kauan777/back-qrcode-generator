import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import { AppError } from "./errors/AppError";
import cors from "cors";

import { routes } from "./routes";

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }
  return res.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`,
  });
});

app.listen(process.env.PORT, () => console.log("🚀 Server is running"));
