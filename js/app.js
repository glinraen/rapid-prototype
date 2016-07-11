function TodoCtrl($scope) {
  
  $scope.todos = [
    {text:'Research Scala', done:false},         
    {text: 'Build an Angular app', done:false}
  ];
  
  $scope.getTodos = function () {
    return $scope.todos.length;
  };
  
  
  $scope.addTodo = function () {
    $scope.todos.push({text:$scope.formTodoText, done:false});
    $scope.formTodoText = '';
  };
  
  $scope.clearCompleted = function () {
    $scope.todos = _.filter($scope.todos, function(todo){
      return !todo.done;
    });
  };
}