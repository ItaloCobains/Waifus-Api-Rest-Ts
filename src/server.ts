import "dotenv/config";
import express, { ErrorRequestHandler, Request, Response } from "express";
import cors from "cors";
import path from "path";
import { connectToDatabase } from "./services/database.service";
import { waifuRouter } from "./routes/waifus.routes";

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "/public")));

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
