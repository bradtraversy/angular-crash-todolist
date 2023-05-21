import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  title: string;

  constructor() {

  }

  ngOnInit() {
  }


  onSubmit() {
    const todo = {
      title: this.title,
      completed: false,
      id: uuidv4(),
    }

    this.addTodo.emit(todo);
    console.log("todo",todo)
  }

}
