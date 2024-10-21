const Task = require("../Models/task");
const taskController = {};

taskController.createTask = async (req, res, next) => {
  const { task, isComplete } = req.body;
  const newTask = new Task({ task, isComplete });
  await newTask.save();
  res.status(200).json({ status: "ok", data: newTask });
};

taskController.getTask = async (req, res, next) => {
  try {
    console.log("GET /task 요청이 처리되고 있습니다.");
    const getTask = await Task.find({});
    res.status(200).json({ status: "ok", data: getTask });
  } catch (error) {
    res.status(404).json(error);
  }
};

taskController.deleteTask = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteTask = await Task.findByIdAndDelete(id);
    res.status(200).json({ status: "ok", data: deleteTask });
  } catch (error) {
    res.status(404).json(error);
  }
};

taskController.updateTask = async (req, res, next) => {
  const id = req.params.id;
  const updateTask = await Task.findByIdAndUpdate(
    id,
    { task: req.body.task },
    { new: true }
  );
  res.status(200).json({ status: "ok", data: updateTask });
};

module.exports = taskController;

//10.20 아직도 백앤드 서버 배포때문에 도대체 며칠을 헤매는중^^^^^^^시발시발
