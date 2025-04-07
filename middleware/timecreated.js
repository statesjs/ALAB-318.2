const express = require("express");
const app = express;

const timeStamp = (req, res, next) => {
  const time = new Date().toISOString();
  console.log(`[${time}] ${req.method} ${req.url}`);
  next();
};

module.exports = timeStamp;
