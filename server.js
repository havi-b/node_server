const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
// const db = require('./config/keys').mongoURI;

// Connect MongoDB
// mongoose
//     .connect(db, {useNewUrlParser: true})
//     .then(() => console.log('MongoBD Connected...'))
//     .catch(err => console.log(err))

// Use Environment variable for PORT or 5000
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
