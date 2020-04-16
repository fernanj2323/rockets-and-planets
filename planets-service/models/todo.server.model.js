const mongoose = require('mongoose');
const { Schema } = mongoose;


const Schema1 = new Schema ({
  createdAt:{
    type: Date,
    default: Date.now
  },
  name: String,
 
  distance: Number,

  radius:Number,
  
  orbital:Number,

  temperature:Number,
      

});


module.exports = mongoose.model('Todo', Schema1);

