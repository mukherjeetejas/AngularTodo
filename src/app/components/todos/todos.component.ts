import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
  todos: Todo[];
  inputTodo: string = "";
  constructor() {
    this.todos = []
  }

  ngOnInit(): void {
    this.todos = [
      {
        content: "Go to Gym",
        completed: false
      },
      {
        content: "10k Steps",
        completed: false
      },
      {
        content: "DSA",
        completed: false
      }
    ]
  }

  toggleDone(id: number) {
    this.todos.map((todo, i) => {
      if (i == id) todo.completed = !todo.completed
      return todo
    }
    )
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => id != i)
  }

  addTodo() {
    this.todos.push({ content: this.inputTodo, completed: false })
  }

}
