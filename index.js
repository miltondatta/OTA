const express = require('express');
const app = express();

// DB Connection
//const db = require('./config/db');

const bodyParser = require('body-parser');

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//Get routes directory
const users = require('./routes/api/users');

//Use Routes
app.get('/', (req, res) => res.send("Hello World: Penta Travel Management"));
app.use('/api/users/', users);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));



