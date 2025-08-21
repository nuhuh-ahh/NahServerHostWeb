const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Home
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Feature page
app.get("/feature", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "feature.html"));
});

// How to use page
app.get("/howtouse", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "howtouse.html"));
});

// Download route
app.get("/download", (req, res) => {
  res.download(path.join(__dirname, "HoaTool.cs"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
