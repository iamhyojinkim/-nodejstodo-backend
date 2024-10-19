const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    task: { type: String, required: true }, // required로 수정
    isComplete: { type: Boolean, default: false }, // required로 수정
  },
  { timestamps: true } // timestamps로 수정
);

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
