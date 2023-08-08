import { port } from "../config";

import app from "../app";
import db from "../db/models";

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
