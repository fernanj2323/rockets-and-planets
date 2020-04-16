const mongoose = require('mongoose');
const { Schema } = mongoose;

const rocketSchema = new Schema ({
    name: 
    {
        type: String
    },
    mass: 
    {
        type: Number
    }, 
    diameter:{
        type:Number
    }, 
    height:{
        type:Number
    },
    stages:{ 
        type:Number
        }
});

module.exports = mongoose.model('Rocket', rocketSchema);