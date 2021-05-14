const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./router.js')

const port = 3000;
const app = express();

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//MongoDB connection string
const uri = 'mongodb+srv://bunkey-user:Bunk3y!@cluster0.w37q3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

//Mongoose connection
mongoose.connect(uri,{useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false}, (err, client) => {
    console.log('Connected to Mongodb Atlas');
    app.listen(3000, () => {
        console.log(`Listening at http://localhost:${port}`);
    });
});

//Router
app.use(router);



