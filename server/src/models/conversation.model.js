import mongoose from 'mongoose';

const messageSchema = mongoose.Schema({
  message: String,
  timestamp: String,
  user: {
    displayName: String,
    email: String,
    photo: String,
    uid: String,
  },
});

const channelSchema = mongoose.Schema({
  channelName: String,
  conversation: [messageSchema],
});

const serverSchema = mongoose.Schema({
  serverName: String,
  serverImage: String,
  channels: [channelSchema],
});

export default mongoose.model('servers', serverSchema);