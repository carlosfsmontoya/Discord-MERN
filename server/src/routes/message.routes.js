import { Router } from "express";

import { getAllChannels, createNewChannel, createNewMessage } from "../controllers/message.controller.js";
const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/new-channel", createNewChannel)
router.post("/new-message", createNewMessage)
router.get("/channels", getAllChannels)

export default router;