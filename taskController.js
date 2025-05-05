const { Task } = require('../models/task');
const { User } = require('../models/user');
const { Project } = require('../models/project');

// Create a new task
exports.createTask = async (req, res) => {
    try {
        const { title, status, projectId, userId } = req.body;
        const task = await Task.create({ title, status, projectId, userId });
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: 'Error creating task', error });
    }
};

// Get all tasks
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving tasks', error });
    }
};

// Get a task by ID
exports.getTaskById = async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving task', error });
    }
};

// Update a task
exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        const { title, status } = req.body;
        await task.update({ title, status });
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: 'Error updating task', error });
    }
};

// Delete a task
exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        await task.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting task', error });
    }
};