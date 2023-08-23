const express = require("express");
const router = express.Router();

const sessionRouter = require("./session.js");
router.use("/session", sessionRouter);

const userRouter = require("./users.js");
router.use("/users", userRouter);

// const productsRouter = require("./products.js");
// router.use("/products", productsRouter);

module.exports = router;
