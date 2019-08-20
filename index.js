const express = require('express');
const app     = express();
const pg      = require('pg');
const bodyParser = require('body-parser');

//Get routes directory
const users =   require('./routes/api/users');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Get DB config
const conString    =   require('./config/keys').PostgreURI;

//Connect to postgres
const dbConnect = new pg.Client(conString);
dbConnect
    .connect()
    .then(() => console.log('Postgres Database Connected'))
    .catch(err => console.log('Error to connect in database'));





   /*   Mongodb connect example
   pg
    .connect(db)
    .then(() => console.log('Postgres Connected'))
    .catch(err => console.log('Error to connect in database'));  */



//Use Routes
app.use('/api/users/', users);




app.get('/', (req, res) => res.send("Hello World: Penta Travel Management"));



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));



