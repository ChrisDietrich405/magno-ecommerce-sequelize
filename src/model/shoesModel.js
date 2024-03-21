import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Shoes = db.define("Shoes", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  }

}, 
{
  timestamps: true, 
  createdAt: 'createdAt', 
  updatedAt: 'updatedAt',
});



export default Shoes;
