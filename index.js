const multer  = require('multer');
const bodyParser = require("body-parser");
const express = require('express');
const cors = require('cors');
require('dotenv').config()

const app = express();
const upload = multer();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post("/api/fileanalyse", upload.single('upfile'), (req, res) => {
  res.json({name: req.file.originalname, type: req.file.mimetype, size: req.file.size})
})



const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
