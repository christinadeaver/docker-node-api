const express = require("express");
const { getHealth } = require("./health");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.json({
    service: "docker-node-api",
    message: "API is running",
    docs: ["/health", "/api/info"],
  });
});

app.get("/health", (_req, res) => {
  res.status(200).json(getHealth());
});

app.get("/api/info", (_req, res) => {
  res.json({
    owner: "senior-ara1206",
    role: "cloud-engineer-demo",
    runtime: `node ${process.version}`,
    environment: process.env.NODE_ENV || "development",
  });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`API listening on port ${port}`);
  });
}

module.exports = app;
