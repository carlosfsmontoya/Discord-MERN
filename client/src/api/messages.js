import axios from "./axios";

export const getAllChannels = async () => axios.get("messages/channels");
