var express = require('express');
var cors = require('cors');
require('dotenv').config();
const multer = require('multer');
const upload = multer({dest: 'uploads/'})

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  let test = 'test';
  let name = req.file.originalname;
  let type = req.file.mimetype;
  let size = req.file.size;
  res.json({
    name: name,
    type: type,
    size: size
  })
})

app.get('api/form-submit', (req, res) => {
  res.send('yeha')
})


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
