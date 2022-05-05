const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/lostArk';

const db = mongoose.connect(mongoURI, {
  useNewURLParser: true })

  db
  .then(db => console.log(`Connected to: ${mongoURI}`))
  .catch(err => {
    console.log(`There was a problem connection to mongo at: ${mongoURI}`);
    console.log(err);
  });


  module.exports = db;