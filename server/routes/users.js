import express from 'express';
import { User } from '../app.js';

const router = express.Router();

router
  .route('/')
  .get(async (req, res) => {
    const UsersList = await User.find();
console.log(UsersList);
    res.status(200).json(UsersList);
  })
  .post(async (req, res) => {
    const { name, age, height,sex } = req.body;
console.log(req.body);
    if (name && age && height && sex) {
      const newUser = await User.create({ name, age,height,sex });

      res.status(201).json(newUser);
    } else {
      res.status(400).json({ create: false });
    }
  });

router
  .route('/:id')
  .delete(async (req, res) => {
    const { id } = req.params;

    await User.findByIdAndDelete(id, (err, User) => {
      if (err) {
        console.log(err);
      } else if (!User) {
        res.status(404).json({ delete: false });
      } else {
        res.status(200).json(id);
      }
    });
  })
  .patch(async (req, res) => {
    const { id } = req.params;
    const { name, age,height } = req.body;

    const Users = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { name, age,height } }
    );
    const UserRes = await User.findById(req.params.id);
    console.log(UserRes);
    res.json(UserRes);
  });

export default router;
