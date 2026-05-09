#!/usr/bin/env node
/**
 * Backend API Service - Express server providing /api/hello endpoint.
 * Serves static frontend files from public/ directory.
 * Listens on port 8080.
 */

const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;

// Serve static files (alice's frontend)
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
  console.log(`API:  curl http://localhost:${PORT}/api/hello`);
  console.log(`Web:  http://localhost:${PORT}`);
});
