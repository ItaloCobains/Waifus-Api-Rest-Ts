import "dotenv/config";
import express, { ErrorRequestHandler, Request, Response } from "express";
import cors from "cors";
import path from "path";
// import ApiRoutes from "./routes/waifus.routes";

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "/public")));

// server.use(ApiRoutes);

server.listen(process.env.PORT);
