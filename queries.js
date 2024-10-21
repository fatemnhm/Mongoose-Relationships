/*------------------------------ Starter Code ------------------------------*/

const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
const Task= require('./models/tasks.js');

const connect = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');
  await runQueries()

  await mongoose.disconnect();
  console.log('Disconnected from MongoDB');
  process.exit();
};

connect()

/*----------------------------- Query Functions -----------------------------*/

const createTask = async () => {
  const todoData = {
    text: "learn React",
    isComplete: false,
  };
  const tasks = await Task.create(todoData);
  console.log("New task:", tasks);
};

const findTodos = async () => {
  const tasks = await Task.find({});
  console.log("All tasks:", tasks);
};

/*------------------------------- Run Queries -------------------------------*/

const runQueries = async () => {
  console.log('Queries running.');
  await createTask();
};