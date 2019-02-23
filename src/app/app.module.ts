import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoitemComponent } from './components/todoitem/todoitem.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddtodoComponent } from './components/addtodo/addtodo.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoitemComponent,
    HeaderComponent,
    AddtodoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
