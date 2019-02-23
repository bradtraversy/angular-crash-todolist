import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOtions = {
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoUrls:string = 'https://jsonplaceholder.typicode.com/todos';
  limitUrls:string = '?_limit=4';
  constructor(
    private http:HttpClient
  ) { }

  //Get Todos
  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(`${this.todoUrls}${this.limitUrls}`)
  }

  //Toggle Completed
  toggleCompleted(todo:Todo):Observable<any>{
    const url = `${this.todoUrls}/${todo.id}`
    return this.http.put(url,todo,httpOtions);
  }

  //Delete
  deleteTodo(todo:Todo):Observable<Todo>{
    const url = `${this.todoUrls}/${todo.id}`;
    return this.http.delete<Todo>(url,httpOtions);
  }

  //Add Todo
  addTodo(todo:Todo):Observable<Todo>{
    return this.http.post<Todo>(this.todoUrls,todo,httpOtions);
  }
}
