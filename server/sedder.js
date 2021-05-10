import mongoose from 'mongoose';
import {User }from './app.js'

async function seed(){
  mongoose.connect('mongodb://localhost:27017/UsersDB', {
    useNewUrlParser:true,
    useUnifiedTopology:true,
  }, ()=>{
    console.log("Connection database");
  })
  await User.create({
    name: 'Anna',
  age: 22,
  height: 180,
  sex: 'woman',
  })
  await User.create({
    name: 'Anton',
    age: 27,
    height: 175,
    sex: 'man',
  })
  await User.create({
    name: 'Roman',
    age: 27,
    height: 185,
    sex: 'man',
  })
  await User.create({
    name: 'Alex',
    age: 24,
    height: 187,
    sex: 'man',
  })

  await User.create({
    name: 'Katrin',
    age: 28,
    height: 165,
    sex: 'woman',
  })
}


seed()
