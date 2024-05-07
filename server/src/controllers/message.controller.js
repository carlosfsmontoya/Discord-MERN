import mongooseData from '../models/conversation.model.js'

export const createNewChannel = async (req, res) => {
  try {
    const { channelName } = req.body;
    console.log(channelName);
    const data = await mongooseData.create({ channelName });
    res.status(201).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

export const getAllChannels = async (req, res) => {
  try {
    const data = await mongooseData.find();
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

export const createNewMessage = async (req, res) => {
  try {
    const { channelName, conversation } = req.body;
    const data = await mongooseData.findOneAndUpdate(
      { channelName },
      { $push: { conversation } },
      { new: true }
    );
    res.status(201).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

export const getAllServers = async (req, res) => {
  try {
    const servers = await mongooseData.find();
    console.log(servers);
    res.status(200).send(servers);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
