const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todo.server.controller')

// get an instance of express router


router.route('/')
     .get(todoController.getTodos)
     .post(todoController.addTodo)
     .put(todoController.updateTodo);

router.route('/:id')
      .get(todoController.getTodo)
      .delete(todoController.deleteTodo);


      module.exports = router;
