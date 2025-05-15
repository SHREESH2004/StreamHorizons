import Video from '../models/Video.model.js';  // Import Video model
import path from 'path';  // For handling file paths

// Upload video and store video info in MongoDB
export const uploadVideo = async (req, res) => {
  try {
    // Extract data from the body (make sure your client sends these fields)
    const { title, genre, type, rating } = req.body;  // Exclude thumbnail here as it's a file

    // Check if video file is present
    if (!req.file) {
      return res.status(400).json({ message: 'No video file uploaded.' });
    }

    // Check if thumbnail file is present
    if (!req.files || !req.files.thumbnail) {
      return res.status(400).json({ message: 'No thumbnail file uploaded.' });
    }

    // Assuming the video and thumbnail files are saved using multer
    const videoPath = req.file.path;  // Path to the uploaded video
    const thumbnailPath = req.files.thumbnail[0].path;  // Path to the uploaded thumbnail

    // Create a new video instance
    const newVideo = new Video({
      title,
      genre,
      type,
      rating,
      video: videoPath,  // Video file path
      thumbnail: thumbnailPath,  // Thumbnail file path
    });

    // Save the new video to MongoDB
    await newVideo.save();

    // Respond with success message and the uploaded video details
    res.status(201).json({ message: 'Video uploaded successfully!', video: newVideo });
  } catch (err) {
    console.error('Error uploading video:', err);
    res.status(500).json({ message: 'Error uploading video.', error: err });
  }
};

// Get all videos
export const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find();  // Fetch all videos from the database
    res.status(200).json(videos);  // Return all videos in the response
  } catch (err) {
    console.error('Error fetching videos:', err);
    res.status(500).json({ message: 'Error fetching videos.', error: err });
  }
};
