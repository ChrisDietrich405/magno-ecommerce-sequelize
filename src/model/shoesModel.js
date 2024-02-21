import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Shoes = db.define(
  "Shoes",
  {
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
  //   price: {
  //     type: DataTypes.FLOAT,
  //     allowNull: false,
  //   },
  // },
  // {
  //   timestamps: false,
   }
);

export default Shoes