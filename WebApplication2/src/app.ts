import { Hello } from './hello';
import { Todo } from './todo';
import { Router, RouterConfiguration } from 'aurelia-router';

export class App {
    heading = 'Todos';
    todos: Todo[] = [];
    todoDescription = '';
    message = 'Hello World!';

    hello: Hello = new Hello();

    addTodo() {
        if (this.todoDescription) {
            this.todos.push(new Todo(this.todoDescription));
            this.todoDescription = '';
        }
    }

    removeTodo(todo) {
        let index = this.todos.indexOf(todo);
        if (index !== -1) {
            this.todos.splice(index, 1);
        }
    }

    sayHello() {
        this.hello.sayHello();
    }
}
