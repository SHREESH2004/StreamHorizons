import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './utils/db.js';
import userRoute from './routes/user.routes.js';
import videoRoutes from './routes/videoroutes.js';

const app = express();
const PORT = 8000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:3000",  
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true, 
};

app.use(cors(corsOptions));

app.use('/uploads', express.static('uploads'));

app.use((req, res, next) => {
  console.log(`Request method: ${req.method}, Request URL: ${req.url}`);
  next();
});

app.use('/', userRoute);
app.use('/videos', videoRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
