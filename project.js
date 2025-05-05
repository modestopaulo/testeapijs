import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

class Project extends Model {}

Project.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Project',
  tableName: 'projects',
  timestamps: true,
});

export default Project;