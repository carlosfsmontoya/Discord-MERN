import axios from "./axios";

export const getAllChannels = async () => axios.get("messages/channels");
export const getAllServers = async () => axios.get("messages/servers");

