import mongoose from "mongoose"
const Schema = mongoose.Schema;

// Define the video schema
const videoSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true, 
  },
  genre: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    required: true,
    trim: true,
  },
  rating: {
    type: String,
    required: true,
    trim: true,
  },
  video: {
    type: String, 
    required: true,
  },
  thumbnail: {
    type: String, 
    required: true,
  },
},{
    timestamps:true
});
const Video = mongoose.model('Video', videoSchema);

export default Video;
