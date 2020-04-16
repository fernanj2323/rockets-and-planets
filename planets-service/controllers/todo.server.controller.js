const mongoose = require('mongoose');
const rocketCTR  = {};
//import models
const Todo = require ('../models/todo.server.model')


rocketCTR.getTodos = async (req, res, next) => {



  Todo.find().exec((err,todos) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
    return res.json({'success':true,'message':'Todos fetched successfully',todos});
  });
}


rocketCTR.addTodo = async (req, res, next) => {
  
  console.log(req.body);
  const newTodo = new Todo(req.body);
  console.log(newTodo);

  newTodo.save((err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':'Todo added successfully',todo});
  })
}

rocketCTR.updateTodo = async (req, res, next) => {
  Todo.findOneAndUpdate({ _id:req.body.id }, req.body, { new:true }, (err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Some Error','error':err});
    }
    console.log(todo);
    return res.json({'success':true,'message':'Updated successfully',todo});
  })
}

rocketCTR.getTodo = async (req, res, next) => {
  Todo.find({_id:req.params.id}).exec((err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
    if(todo.length){
      return res.json({'success':true,'message':'Todo fetched by id successfully',todo});
    }
    else{
      return res.json({'success':false,'message':'Todo with the given id not found'});
    }
  })
}

rocketCTR.deleteTodo = async (req, res, next) => {
  Todo.findByIdAndRemove(req.params.id, (err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':todo.todoText+' deleted successfully'});
  })
}



module.exports = rocketCTR;
