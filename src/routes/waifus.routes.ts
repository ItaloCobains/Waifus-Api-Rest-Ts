// External Dependencies
import express from "express";
import * as ApiController from "../controllers/apiController";
// Global Config
export const waifuRouter = express.Router();

waifuRouter.use(express.json());
// GET

waifuRouter.get("/", ApiController.home);

waifuRouter.get("/ping", ApiController.getPing);

waifuRouter.get("/allwaifus", ApiController.getAllWaifus);

waifuRouter.get("/waifu/:id", ApiController.getWaifu);

// POST

waifuRouter.post("/waifu", ApiController.createNewWaifu);

// PUT
waifuRouter.put("/waifu/:id", ApiController.updateWaifu);
// DELETE

waifuRouter.delete("/waifu/:id", ApiController.deleteWaifu)