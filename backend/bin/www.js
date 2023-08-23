const { port } = require("../config/index.js");

const app = require("../app.js");
const db = require("../db/models/index.js");

db.sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection success! Sequelize is ready to use...");

    app.listen(port, () => console.log(`Listening on port ${port}...`));
  })
  .catch((err) => {
    console.log("Database connection failure.");
    console.error(err);
  });
