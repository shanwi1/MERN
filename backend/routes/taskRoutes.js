const express = require("express");

const router = express.Router();

const {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
} = require("../controller/taskControllers");

const { protect } = require("../middleware/authMiddleware");

router.post("/create", protect, createTask);

router.get("/getTasks", protect, getTasks);

router.get("/getTask/:id", protect, getTaskById);

router.put("/updateTask/:id", protect, updateTask);

router.delete("/deleteTask/:id", protect, deleteTask);

module.exports = router;