const { Project } = require('../models/project');

// Create a new project
exports.createProject = async (req, res) => {
    try {
        const { name, description } = req.body;
        const project = await Project.create({ name, description });
        res.status(201).json(project);
    } catch (error) {
        res.status(500).json({ message: 'Error creating project', error });
    }
};

// Get all projects
exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.findAll();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching projects', error });
    }
};

// Get a project by ID
exports.getProjectById = async (req, res) => {
    try {
        const project = await Project.findByPk(req.params.id);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching project', error });
    }
};

// Update a project
exports.updateProject = async (req, res) => {
    try {
        const { name, description } = req.body;
        const project = await Project.findByPk(req.params.id);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        project.name = name;
        project.description = description;
        await project.save();
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: 'Error updating project', error });
    }
};

// Delete a project
exports.deleteProject = async (req, res) => {
    try {
        const project = await Project.findByPk(req.params.id);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        await project.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting project', error });
    }
};