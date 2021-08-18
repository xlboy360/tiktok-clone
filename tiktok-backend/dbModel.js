import Mongoose from "mongoose";

const tiktokSchema = Mongoose.Schema({
  url: String,
  channel: String,
  song: String,
  likes: String,
  messages: String,
  description: String,
  shares: String,
});

// Collection inside the database
export default Mongoose.model('tiktokVideos', tiktokSchema);