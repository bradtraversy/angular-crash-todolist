import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from "../../services/todo.service";

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {
  @Input() todo:Todo;
  @Output() deleteTodo:EventEmitter<Todo> = new EventEmitter();
  @Output() shiftTodo:EventEmitter<Todo> = new EventEmitter();

  constructor(
    private todoService:TodoService
  ) { }

  ngOnInit() {
  }

  setClass(){
    let classes={
      'is-complete':this.todo.complete
    }
    return classes;
  }

  onTick(todo:Todo){
    //Toggle Function
    this.toggleTodo(todo);

    //Shift to the Bottom;
    this.shiftTodo.emit(todo);

  }

  toggleTodo(todo:Todo){
    //Toggle in UI
    this.todo.complete = !this.todo.complete;
    //Toggle on Server
    this.todoService.toggleCompleted(todo).subscribe();
  }
  
  onDelete(todo:Todo){
    this.deleteTodo.emit(todo);
    
  }

}
