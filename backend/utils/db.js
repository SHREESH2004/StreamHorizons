import mongoose from 'mongoose';


const mongoURI = 'mongodb://localhost:27017';

const DB_NAME = 'StreamHorizon';

const connectDB = async () => {
  try {
    await mongoose.connect(`${mongoURI}/${DB_NAME}`)
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error.message); 
    process.exit(1); 
  }
};

export default connectDB;
