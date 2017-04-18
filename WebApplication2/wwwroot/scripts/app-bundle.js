define('app',["require", "exports", "./hello", "./todo"], function (require, exports, hello_1, todo_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.heading = 'Todos';
            this.todos = [];
            this.todoDescription = '';
            this.message = 'Hello World!';
            this.hello = new hello_1.Hello();
        }
        App.prototype.addTodo = function () {
            if (this.todoDescription) {
                this.todos.push(new todo_1.Todo(this.todoDescription));
                this.todoDescription = '';
            }
        };
        App.prototype.removeTodo = function (todo) {
            var index = this.todos.indexOf(todo);
            if (index !== -1) {
                this.todos.splice(index, 1);
            }
        };
        App.prototype.sayHello = function () {
            this.hello.sayHello();
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFHQTtRQUFBO1lBQ0ksWUFBTyxHQUFHLE9BQU8sQ0FBQztZQUNsQixVQUFLLEdBQVcsRUFBRSxDQUFDO1lBQ25CLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1lBQ3JCLFlBQU8sR0FBRyxjQUFjLENBQUM7WUFFekIsVUFBSyxHQUFVLElBQUksYUFBSyxFQUFFLENBQUM7UUFtQi9CLENBQUM7UUFqQkcscUJBQU8sR0FBUDtZQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztnQkFDaEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7WUFDOUIsQ0FBQztRQUNMLENBQUM7UUFFRCx3QkFBVSxHQUFWLFVBQVcsSUFBSTtZQUNYLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLENBQUM7UUFDTCxDQUFDO1FBRUQsc0JBQVEsR0FBUjtZQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDMUIsQ0FBQztRQUNMLFVBQUM7SUFBRCxDQXpCQSxBQXlCQyxJQUFBO0lBekJZLGtCQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlbGxvIH0gZnJvbSAnLi9oZWxsbyc7XG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi90b2RvJztcblxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gICAgaGVhZGluZyA9ICdUb2Rvcyc7XG4gICAgdG9kb3M6IFRvZG9bXSA9IFtdO1xuICAgIHRvZG9EZXNjcmlwdGlvbiA9ICcnO1xuICAgIG1lc3NhZ2UgPSAnSGVsbG8gV29ybGQhJztcblxuICAgIGhlbGxvOiBIZWxsbyA9IG5ldyBIZWxsbygpO1xuXG4gICAgYWRkVG9kbygpIHtcbiAgICAgICAgaWYgKHRoaXMudG9kb0Rlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnRvZG9zLnB1c2gobmV3IFRvZG8odGhpcy50b2RvRGVzY3JpcHRpb24pKTtcbiAgICAgICAgICAgIHRoaXMudG9kb0Rlc2NyaXB0aW9uID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxuXG4gICAgcmVtb3ZlVG9kbyh0b2RvKSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMudG9kb3MuaW5kZXhPZih0b2RvKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy50b2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cblxuICAgIHNheUhlbGxvKCkge1xuICAgICAgICB0aGlzLmhlbGxvLnNheUhlbGxvKCk7XHJcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('hello',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Hello = (function () {
        function Hello() {
            this.firstName = 'John';
            this.lastName = 'Doe';
        }
        Hello.prototype.sayHello = function () {
            alert("Hello " + this.firstName + " " + this.lastName + ". Nice to meet you");
        };
        return Hello;
    }());
    exports.Hello = Hello;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbGxvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBQUE7WUFDSSxjQUFTLEdBQVcsTUFBTSxDQUFDO1lBQzNCLGFBQVEsR0FBVyxLQUFLLENBQUE7UUFLNUIsQ0FBQztRQUhHLHdCQUFRLEdBQVI7WUFDSSxLQUFLLENBQUMsV0FBUyxJQUFJLENBQUMsU0FBUyxTQUFJLElBQUksQ0FBQyxRQUFRLHVCQUFvQixDQUFDLENBQUM7UUFDeEUsQ0FBQztRQUNMLFlBQUM7SUFBRCxDQVBBLEFBT0MsSUFBQTtJQVBZLHNCQUFLIiwiZmlsZSI6ImhlbGxvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEhlbGxvIHtcbiAgICBmaXJzdE5hbWU6IHN0cmluZyA9ICdKb2huJztcbiAgICBsYXN0TmFtZTogc3RyaW5nID0gJ0RvZSdcblxuICAgIHNheUhlbGxvKCkge1xuICAgICAgICBhbGVydChgSGVsbG8gJHt0aGlzLmZpcnN0TmFtZX0gJHt0aGlzLmxhc3ROYW1lfS4gTmljZSB0byBtZWV0IHlvdWApO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBZEQsOEJBY0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVyZWxpYX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnXG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5mZWF0dXJlKCdyZXNvdXJjZXMnKTtcblxuICBpZiAoZW52aXJvbm1lbnQuZGVidWcpIHtcbiAgICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoKTtcbiAgfVxuXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcbiAgfVxuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('todo',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Todo = (function () {
        function Todo(description) {
            this.description = description;
            this.done = false;
        }
        return Todo;
    }());
    exports.Todo = Todo;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFHSSxjQUFtQixXQUFtQjtZQUFuQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtZQUZ0QyxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBRTRCLENBQUM7UUFDOUMsV0FBQztJQUFELENBSkEsQUFJQyxJQUFBO0lBSlksb0JBQUkiLCJmaWxlIjoidG9kby5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBUb2RvIHtcbiAgICBkb25lID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyl7IH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n\n  <input value.bind=\"hello.firstName\" />\n  <input value.bind=\"hello.lastName\" />\n\n   <button click.trigger=\"sayHello()\">Say Hello</button>\n\n\n  <h1>${message}</h1>\n  <p>${hello.firstName}</p>\n  <br />\n  <h1>${heading}</h1>\n  <form submit.trigger=\"addTodo()\">\n    <input type=\"text\" value.bind=\"todoDescription\"/>\n    <button type=\"submit\">Add Todo</button>\n  </form>\n\n  <ul>\n    <li repeat.for=\"todo of todos\">\n      <input type=\"checkbox\" checked.bind=\"todo.done\"/>\n      <span css=\"text-decoration: ${todo.done ? 'line-through' : 'none'}\">\n        ${todo.description}\n        ${todo.done}\n      </span>\n      <button click.trigger=\"removeTodo(todo)\">Remove</button>\n    </li>\n  </ul>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map