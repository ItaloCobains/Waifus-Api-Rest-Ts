import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import Waifu from "../models/waifus";
import sharp from "sharp";
import { unlink } from "fs/promises";

export const home = (req: Request, res: Response) => {
  res.status(200).json({
    comands: {
      "/ping  (GET)": "return ( { pong: true } ) using for testing api",
      "/allwaifus (GET)": "return all waifus on the database",
      "/waifu/:id (GET)": "search waifu on the database using id",
      "/waifu (POST)": "create a new waifu ",
      "/waifu/:id (PUT)": "update infos of waifus on the database using id",
      "/waifu/:id (DELETE)": "delete waifu on the database using id"
    }
  });
};

export const getPing = (req: Request, res: Response) => {
  res.status(200).json({ pong: true });
};

export const getAllWaifus = async (req: Request, res: Response) => {
  try {
    const waifus = await collections.waifus?.find({}).toArray();

    res.status(200).json({ waifus });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getWaifu = async (req: Request, res: Response) => {
  const id = req?.params?.id;

  try {
    const query = { _id: new ObjectId(id) };
    const waifu = await collections.waifus?.findOne(query);

    if (waifu) {
      res.status(200).json({ waifu });
    }
  } catch (error) {
    res.status(404).json({
      message: `Could not find any wife with this id: ${req.params.id}`
    });
  }
};

export const createNewWaifu = async (req: Request, res: Response) => {
  try {
    const infos = req.body as Waifu;

    if (req.file) {
      const filename = `${req.file.filename}`;
      await sharp(req.file.path)
        .resize(500)
        .toFormat("jpeg")
        .toFile(`./public/midia/${filename}`);

      await unlink(req.file.path);
      infos.icon = filename;
    } else {
      res.status(400).json({ error: "send a icon" });
      return;
    }

    const result = await collections.waifus?.insertOne(infos);

    result
      ? res.status(201).json({
          message: `Successfully created a new waifu with id ${result.insertedId}`
        })
      : res.status(500).json({ error: "Failed to created a new waifu" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }
};

export const updateWaifu = async (req: Request, res: Response) => {
  const id = req?.params?.id;

  try {
    const updateWaifu: Waifu = req.body as Waifu;
    const query = { _id: new ObjectId(id) };

    const result = await collections.waifus?.updateOne(query, {
      $set: updateWaifu
    });

    result
      ? res
          .status(200)
          .json({ message: `Successfully updated game with id ${id}` })
      : res.status(304).json({ message: `Game with id: ${id} not updated` });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }
};

export const deleteWaifu = async (req: Request, res: Response) => {
  const id = req?.params?.id;

  try {
    const query = { _id: new ObjectId(id) };
    const result = await collections.waifus?.deleteOne(query);

    if (result && result.deletedCount) {
      res
        .status(202)
        .json({ message: `Successfully removed game with id ${id}` });
    } else if (!result) {
      res.status(400).json({ message: `Failed to remove game with id ${id}` });
    } else if (!result.deletedCount) {
      res.status(404).json({ message: `Game with id ${id} does not exist` });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ error });
  }
};
