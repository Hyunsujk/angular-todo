import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss'],
})
export class ListManagerComponent implements OnInit {
  todoList: TodoItem[];

  constructor(private todoListService: TodoListService) {
    todoListService.getTodoList();
  }

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList(); // get the list from the service
  }

  addItem(title: string) {
    this.todoList.push({ title }); // same with {title:title} ES6 Object Property Value Shorthand
  }
}
