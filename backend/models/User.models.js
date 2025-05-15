import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true, 
    unique: true,   
    minlength: 3,   
    maxlength: 20,  
  },
  email: {
    type: String,
    required: true, 
    unique: true,   
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'], 
  },
  password: {  
    type: String,
    required: true, 
    minlength: 6,   
  },
  createdAt: {
    type: Date,
    default: Date.now, 
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', UserSchema);

export default User;
