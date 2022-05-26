// External Dependencies
import express, { Request, Response } from "express";
import { ObjectId } from "mongoDB";
import { collections } from "../services/database.service";
import Waifu from "../models/waifus";
// Global Config
export const waifuRouter = express.Router();

waifuRouter.use(express.json());
// GET
waifuRouter.get("/", async (req: Request, res: Response) => {
  try {
    let waifus = await collections.waifus?.find({}).toArray();

    res.status(200).send(waifus);
  } catch (error) {
    res.status(500).send(error);
  }
});

waifuRouter.get("/:id", async (req: Request, res: Response) => {
  const id = req?.params?.id;

  try {
    const query = { _id: new ObjectId(id) };
    const waifu = await collections.waifus?.findOne(query);

    if (waifu) {
      res.status(200).send(waifu);
    }
  } catch (error) {
    res
      .status(404)
      .send(`Unable to find matching document with id: ${req.params.id}`);
  }
});
// POST

// PUT

// DELETE
