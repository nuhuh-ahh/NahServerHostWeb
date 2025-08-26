const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/feature", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "feature.html"));
});

app.get("/howtouse", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "howtouse.html"));
});

app.get("/qna", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "qna.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.get("https://download1507.mediafire.com/qxlzxfcw4dtg4pegGeDV8ruaW3R90a2ZCJs66uO7-fwvRYfwP04YiMZftuCLzcoZSjlAqLltiUC5I1qzZXDSmQCdQsZCqcoZd3eMR_SwdWM9l79EsD-tehzn7R8vKpONTsgYoM8GQ2-KB8FRWGdRC6ED0dVtFtPyUnHQTuhY5MRn/m5mspeb974pgtor/MC+Server+Host+By+Nah.zip", (req, res) => {
  res.download(path.join(__dirname, "public", "Nah.zip"));
});
