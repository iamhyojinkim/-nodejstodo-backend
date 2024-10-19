const express = require("express");
const taskController = require("../Controller/task.controller");
const router = express.Router();

router.post("/", taskController.createTask);
router.get("/", taskController.getTask);
router.delete("/:id", taskController.deleteTask);
router.put("/:id", taskController.updateTask);

module.exports = router;
