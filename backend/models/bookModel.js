import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  cover: String,
  description: String,
  rating: { type: Number, default: 0 },
});

export default mongoose.model("Book", bookSchema);
