const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.port || 8000;
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(morgan('dev'));
app.use(cors());

mongoose.connect('mongodb://localhost/mean', { useNewUrlParser: true }, (err, connect) => {
    if (err) {
        console.log('db not connected')
    } else if (connect) {
        console.log('db connected')
    }
})


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/api/user', require('./route/userRoute'));

app.listen(port, () => {
    console.log(`server is running at http://127.0.0.1:${port}`);
})