const express   =   require('express');
const app       =   express();
const dotenv    =   require('dotenv');
dotenv.config();

// DB Connection
//const db = require('./config/db');

const bodyParser = require('body-parser');

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//Get routes directory
const users     = require('./routes/api/users');
const amadeus   = require('./routes/api/amadeus');
const global    = require('./routes/api/global');


//Use Routes
app.get('/', (req, res) => res.send("Hello World: Node JS"));
app.use('/api/users/', users);

app.use('/api/amadeus/', amadeus);

app.use('/api/global/', global);



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));



