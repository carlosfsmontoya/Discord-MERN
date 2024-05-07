import { Router } from "express";

import { getAllChannels, createNewChannel, createNewMessage, getAllServers } from "../controllers/message.controller.js";
const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/new-channel", createNewChannel)
router.post("/new-message", createNewMessage)
router.get("/channels", getAllChannels)
router.get("/servers", getAllServers)

export default router;