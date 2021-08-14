class ToDoList {
    constructor() {
        this.todos = [];
    };
    addTodo(task){
        this.todos.push(task);
    };
    removeTodo(id){
        this.todos = this.todos.filter(function(listItem){
           return listItem.id !== id;
        });
    };
    showCompletedTasks () {
      return this.todos.filter(function(listItem){
        return listItem.status === true;
     });
    };
    showInProgressTask () {
      return this.todos.filter(function(listItem){
        return listItem.status === false;
     });
    };
    changeStatus(id, status) {
        return this.todos.find(function(listItem){
            if (listItem.id === id) {                
               listItem.status = status;
            } else {                
               return listItem;
            };
         });
    };
    findTasks(arg) {
       return this.todos.forEach(function(task) {
            if(task.task.includes(arg)) {
              return console.log('findTasks =', task);
            };
        });
    };
    moveUp(id) {       
     let itemId = this.todos.findIndex((item) => item.id === id);
     let itemTask = this.todos[itemId];
     let upTask = this.todos[itemId - 1];    
      this.todos.splice(itemId - 1, itemId, itemTask, upTask);
    };
    moveDown(id) {
      let itemId = this.todos.findIndex((item) => item.id === id);
      let itemTask = this.todos[itemId];
      let downTask = this.todos[itemId + 1];      
      this.todos.splice(itemId, itemId + 1, downTask, itemTask);
    };
};
  
  let toDoList = new ToDoList();
  
  class Task {
      constructor(task, status, id){
          this.task = task;
          this.status = status;
          this.id = id;
      };
  };

  let task1 = new Task('to buy milk', true, 'task1');
  let task2 = new Task('to buy bread', true, 'task2');
  let task3 = new Task('to buy salt', false, 'task3');
  let task4 = new Task('to buy sugar', false, 'task4');
        
  
  toDoList.addTodo(task1);
  toDoList.addTodo(task2);
  toDoList.addTodo(task3);
  toDoList.addTodo(task4);
//   toDoList.removeTodo(task2.id);
  console.log('toDoList.todos =', toDoList.todos);
  console.log('toDoList.showCompletedTasks =', toDoList.showCompletedTasks());
  console.log('toDoList.showInProgressTask = ', toDoList.showInProgressTask());

// 3.1 Реализуйте метод changeStatus. Который будет менять статус задачи
  console.log('toDoList.changeStatus = ', toDoList.changeStatus());

// 3.2 Реализуйте метод поиска findTasks. Нужно найти все задачи которые содержат фразу которую передаете в метод поиска.
//       Подсказка можно использовать includes
toDoList.findTasks('salt');

// 3.3 Опциональное задание (не обязательное). Реализуйте методы который меняет позицию таски moveUp и moveDown. 
//      Данные методы принимают задачу для которой нужно поменять позицию.
toDoList.moveUp('task3');

toDoList.moveDown('task2');

console.log('new toDoList.todos =', toDoList.todos);
