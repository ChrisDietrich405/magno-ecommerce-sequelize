//to connect using docker 

import { Sequelize } from "sequelize";

// database here refers to the database service in docker compose

const db = new Sequelize("magno-new", "root", "secret", {
  host: "localhost",
  dialect: "mysql",
  port: "3306",
});

export default db;


//If I don't want to use Docker I just need to update my port
// import { Sequelize } from "sequelize";

// const db = new Sequelize("magno-new", "chris", "chris123", {
//   host: "127.0.0.1",
//   dialect: "mysql",
//   port: "3306",
// });

// export default db;
