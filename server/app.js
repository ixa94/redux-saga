import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import usersRouter from './routes/users.js';

const app = express();

mongoose.connect('mongodb://localhost:27017/UsersDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = mongoose.model('User', {
  name: { type: String, trim: true },
  age: { type: Number },
  height: { type: Number },
  sex: { type: String },
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/users', usersRouter);

export { app, User };




