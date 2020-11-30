var express = require('express');
const { json, text } = require("express");
var app = express();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });



  app.post('/upload', upload.single('statement'), (req, res) => {
      res.send("hello");
    console.log(`new upload = ${req.file.filename}\n`);
    console.log(req.file);
    res.json({ msg: 'Upload Works' });
 });

app.listen(3000);