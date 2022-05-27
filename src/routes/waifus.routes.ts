// External Dependencies
import express from "express";
import * as ApiController from "../controllers/apiController";
import multer from "multer";
// Global Config
export const waifuRouter = express.Router();

waifuRouter.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./tmp");
  },
  filename: (req, file, cb) => {
    const randomName = Math.floor(Math.random() * 9999999);
    cb(null, `${randomName + Date.now()}.jpg`);
  }
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowed: string[] = ["image/jpg", "image/png", "image/jpeg"];
    cb(null, allowed.includes(file.mimetype));
  },
  limits: { fieldSize: 2000000 }
});
// GET

waifuRouter.get("/", ApiController.home);

waifuRouter.get("/ping", ApiController.getPing);

waifuRouter.get("/allwaifus", ApiController.getAllWaifus);

waifuRouter.get("/waifu/:id", ApiController.getWaifu);

// POST

waifuRouter.post("/waifu", upload.single("icon"), ApiController.createNewWaifu);

// PUT
waifuRouter.put("/waifu/:id", ApiController.updateWaifu);
// DELETE

waifuRouter.delete("/waifu/:id", ApiController.deleteWaifu);
