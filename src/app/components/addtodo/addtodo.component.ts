import { Component, OnInit, EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {
  title:string;
  @Output() addTodo:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){

    const todo = {
      title: this.title,
      completed: false
    }
    this.addTodo.emit(todo);
    this.title = "";
  }
  
}
