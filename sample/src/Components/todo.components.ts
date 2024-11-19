import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.components.html',
  styleUrls: ['./todo.components.css'],
})
export class TodoComponent {
  todos: string[] = [];
  todoInput: string = '';

  addTodo() {
    if (!this.todos.includes(this.todoInput.toLowerCase())) {
      if (this.todoInput.trim()) {
        this.todos.push(this.todoInput.trim());
        // console.log(this.todoInput.toLowerCase());
        this.todoInput = '';
      }
    }
    else {
      alert("Already Added")
      this.todoInput = '';
    }
  }

  deleteItem(index: number) {
    this.todos.splice(index, 1);
  }
}
