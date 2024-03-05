import { Sequelize } from "sequelize";

const db = new Sequelize("magno-new", "chris", "chris123", {
  host: "127.0.0.1",
  dialect: "mysql",
  port: "3307",
});

export default db;
