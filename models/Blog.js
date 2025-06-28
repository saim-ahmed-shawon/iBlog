import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  username:String,
  title: String,
  image: String,
  content: String,
});

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);