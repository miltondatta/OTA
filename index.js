const express = require('express');
const app     = express();
const dotenv  = require('dotenv');
dotenv.config();

// DB Connection
//const db = require('./config/db');

const bodyParser = require('body-parser');

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const users        = require('./routes/api/users');
const contact      = require('./routes/api/contact');
const country      = require('./routes/api/country');
const passenger    = require('./routes/api/passenger');
const Airline      = require('./routes/api/airline');
const air          = require('./routes/api/air');
const global       = require('./routes/api/global');
const Airport      = require('./routes/api/airport');
const Fixed_values = require('./routes/api/fixed_values');
const Api_sources  = require('./routes/api/api_sources');
const ConfPromo    = require('./routes/api/configure_promotion');
const UserGroup    = require('./routes/api/user_group');

//Use All Routes
app.get('/', (req, res) => res.send("Hello World: Node JS"));
app.use('/api/users/', users);
app.use('/api/contact/', contact);
app.use('/api/country/', country);
app.use('/api/passenger/', passenger);
app.use('/api/airline/', Airline);
app.use('/api/airport/', Airport);
app.use('/api/airport/', Airport);
app.use('/api/fixed_values/', Fixed_values);
app.use('/api/api_sources/', Api_sources);
app.use('/api/configure_promotion/', ConfPromo);
app.use('/api/user_group/', UserGroup);

app.use('/api/air/', air);
app.use('/api/global/', global);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));



