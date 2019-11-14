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


//Define Users Routes
const users         = require('./routes/api/users');

//Define AIR Routes 
const air           = require('./routes/api/air');

//Define Hotels Routes

//Define Cruise Routes

//Define GLOBAL Routes
const global        = require('./routes/api/global');


//Use All Routes
app.get('/', (req, res) => res.send("Hello World: Node JS"));
app.use('/api/users/', users);

app.use('/api/air/', air);
app.use('/api/global/', global);



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));



