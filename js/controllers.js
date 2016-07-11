angular.module('MyToDoApp', ['firebase'])
  .controller('TodoCtrl', TodoCtrl);

  

TodoCtrl.$inject = ['$http'];

function TodoCtrl($http){
  var self = this;
  self.all = [];
  self.addTodo = addTodo;
  self.newTodo = {};
  self.getTodos = getTodos;
  self.deleteTodo = deleteTodo;

  getTodos();
  function getTodos(){
    $http
      .get('http://localhost:3000/todos')
      .then(function(response){
        self.all = response.data.todos;
    });
  }

  function addTodo(){
    $http
      .post('http://localhost:3000/todos', self.newTodo)
      .then(function(response){
        getTodos();
    });
    self.newTodo = {};
  }

  function deleteTodo(todo){
    $http
      .delete("http://localhost:3000/todos/" + todo._id)
      .then(function(response){
        var index = self.all.indexOf(todo);
        self.all.splice(index, 1);
      });
  }
}

