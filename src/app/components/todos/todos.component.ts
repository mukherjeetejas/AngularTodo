import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor() {
    this.todos = []
  }

  ngOnInit(): void {
    this.todos = [
      {
        content: "do internship",
        completed: true
      },
      {
        content: "get job",
        completed: false
      }
    ]
  }

}
