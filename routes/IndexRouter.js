const express = require('express');
const router = express.Router();
const path = require("path");

const notesRouter = require("./notesRouter");
router.use("/notes",notesRouter);

module.exports = router;