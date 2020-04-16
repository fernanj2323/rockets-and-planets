const mongoose = require('mongoose');
const { Schema } = mongoose;


const Schema1 = new Schema ({
  createdAt:{
    type: Date,
    default: Date.now
  },
  name: String,
 
  mass: Number,

  diameter:Number,
  
  height:Number,

  stages:Number,
      

});


module.exports = mongoose.model('Todo', Schema1);

