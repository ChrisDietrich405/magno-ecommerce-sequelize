import { Sequelize } from "sequelize";

const db = new Sequelize("magno-new", "root", "secret", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
