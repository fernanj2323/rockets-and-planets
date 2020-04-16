const mongoose = require('mongoose');
//atlas uri 
const dbURI = require('./properties').DB;
//local uri 
const URI = 'mongodb://localhost/mean-crud';


mongoose.connect(dbURI)
    .then(db => console.log(`db is connected on ${dbURI}` ))
    .catch(err => console.log(`Connection error on DB procress ${err}`));


    process.on('SINGINT', ()=> {
        mongoose.connection.close(()=> {
            console.log(`Mongo is on process SINGINT`);
            process.exit(0)
        });
    });

module.exports = mongoose;
