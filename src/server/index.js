const express = require("express");
require("dotenv").config();

global.config = {};
global.config.APP_PORT = process.env.APP_PORT;

const runServer = async () => {
  const app = express();
  app.listen(global.config.APP_PORT, async () => {
    console.log(
      `Sandesh Pharmecy Backend Server Statrd on Port: ${global.config.APP_PORT}`
    );
  });
};

module.exports = runServer;
