import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import User from './user.js';
import Project from './project.js';

class Task extends Model {}

Task.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pending',
  },
}, {
  sequelize,
  modelName: 'Task',
  tableName: 'tasks',
  timestamps: true,
});

Task.belongsTo(User, { foreignKey: 'userId' });
Task.belongsTo(Project, { foreignKey: 'projectId' });

export default Task;