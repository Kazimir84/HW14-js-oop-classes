# HW14-js-oop-classes
1. Создайте на вашем github репозиторий с именем HW14-js-oop-classes. Все результаты нужно запушить в ваш репозиторий и прикрепить ссылку на hillel портале.
2. Создайте index.html в котором подключите js script.
3. Реализуйте дополнительную логику для класса ToDoList
    3.1 Реализуйте метод changeStatus. Который будет менять статус задачи
    3.2 Реализуйте метод поиска findTasks. Нужно найти все задачи которые содержат фразу которую передаете в метод поиска. Подсказка можно использовать includes https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/includes
    3.3 Опциональное задание (не обязательное). Реализуйте методы который меняет позицию таски moveUp и moveDown. Данные методы принимают задачу для которой нужно поменять позицию.
class ToDoList {
        constructor() {
            this.todos = []
        }
        addTodo(task){
            this.todos.push(task)
        }
        removeTodo(id){
            this.todos = this.todos.filter(function(listItem){
               return listItem.id !== id;
            })
        }
        showCompletedTasks () {
          return this.todos.filter(function(listItem){
            return listItem.status === true;
         })
        }
        showInProgressTask () {
          return this.todos.filter(function(listItem){
            return listItem.status === false;
         })
        }
      }
      
      let toDoList = new ToDoList()
 
      class Task {
          constructor(task, status, id){
              this.task = task
              this.status = status
              this.id = id
          }
      }
      let task1 = new Task('to buy milk', true, 'task1')
      let task2 = new Task('to buy bread', true, 'task2')
      let task3 = new Task('to buy salt', false, 'task3')
      let task4 = new Task('to buy sugar', false, 'task4')
            
      
      toDoList.addTodo(task1)
      toDoList.addTodo(task2)
      toDoList.addTodo(task3)
      toDoList.addTodo(task4)
      toDoList.removeTodo(task2.id)
      console.log(toDoList.todos)
      console.log(toDoList.showCompletedTasks());
      console.log(toDoList.showInProgressTask());
