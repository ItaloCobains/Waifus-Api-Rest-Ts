import "dotenv/config";
import express, { ErrorRequestHandler, Request, Response } from "express";
import cors from "cors";
import path from "path";
import { connectToDatabase } from "./services/database.service";
import { waifuRouter } from "./routes/waifus.routes";
import { MulterError } from "multer";

const server = express();

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(400);

  if (err instanceof MulterError) {
    res.json({ message: err.code });
  } else {
    console.error(err.message);
    res.json({ message: err.message });
  }
};

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(`${process.cwd()}/public`));
server.use(errorHandler);

connectToDatabase()
  .then(() => {
    server.use("/", waifuRouter);

    server.listen(process.env.PORT, () => {
      console.log("Server listening on port " + process.env.PORT);
    });
  })
  .catch((error: Error) => {
    console.error("Databas connection failed", error);
    process.exit();
  });
