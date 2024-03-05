import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Shoes = db.define("Shoes", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, 
{
  timestamps: true, 
  createdAt: 'createdAt', 
  updatedAt: 'updatedAt',
});



export default Shoes;
