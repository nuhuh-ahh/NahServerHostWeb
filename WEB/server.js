const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// serve static files (HTML, CSS, JS, downloads)
app.use(express.static(path.join(__dirname, "public")));

// Route: homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Route: download file (ví dụ file C#)
app.get("/download", (req, res) => {
  const filePath = path.join(__dirname, "public", "downloads", "HoaTool.cs");
  res.download(filePath, "HoaTool.cs"); // tên file khi tải về
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
