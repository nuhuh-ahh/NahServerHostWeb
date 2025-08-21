const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// serve file tĩnh từ /public
app.use(express.static(path.join(__dirname, 'public')));

// router cho từng trang
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/feature', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'feature.html'));
});

app.get('/howtouse', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'howtouse.html'));
});

// fallback cho các route không tồn tại
app.use((req, res) => {
  res.status(404).send('<h1>404 Not Found</h1><p>Trang bạn yêu cầu không tồn tại.</p>');
});

app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
