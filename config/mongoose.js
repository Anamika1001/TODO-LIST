// require the library
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

// connect to the database
mongoose.connect('mongodb://localhost/tasks_list_db');

// acquire the connection
const db = mongoose.connection;

// error
db.on('error', console.error.bind(console, 'Error connecting to DB'));

// up and running then print the message
db.once("open", function(){
    console.log("Successfully connected to the database");
})