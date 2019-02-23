import { Component, OnInit } from '@angular/core';
import { Todo } from "../../models/Todo";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];
  constructor(
    private todoService:TodoService
    ) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos=>{
      this.todos = todos;
    });
  }

  deleteTodo(todo:Todo){
    this.todos = this.todos.filter(t=> t.id!=todo.id);
    this.todoService.deleteTodo(todo).subscribe();
  }

  //Addtodo
  addTodo(todo:Todo){
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.unshift(todo);
    });
  }

  //Shift Todo to the end
  shiftTodo(todo:Todo){
    this.todos = this.todos.filter(t=> t.id != todo.id);
    this.todos.push(todo);
  }

}
