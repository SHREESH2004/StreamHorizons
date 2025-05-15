import multer from 'multer';
import express from 'express';
import path from 'path';
import { uploadVideo, getAllVideos } from '../controllers/admin-upload.js';

const router = express.Router();

// Set up storage for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Ensure this folder exists or create it
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Use timestamp for unique filenames
  },
});

const upload = multer({ storage: storage });

// Routes
router.post('/upload-video', upload.fields([
  { name: 'video', maxCount: 1 },       // Handle video file
  { name: 'thumbnail', maxCount: 1 }    // Handle thumbnail file
]), uploadVideo); // The uploadVideo function handles the rest of the logic

router.get('/videos', getAllVideos);  // Fetch all uploaded videos

export default router;
