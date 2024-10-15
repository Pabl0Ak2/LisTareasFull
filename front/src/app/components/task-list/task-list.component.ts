import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../model/task.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks: Task[] = [];
  newTask: Task = { title: '', description: '', category: '', creation_date: new Date() };
  categories: string[] = ['Trabajo', 'Personal', 'Estudio'];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks.sort((a, b) => {
        return new Date(b.creation_date).getTime() - new Date(a.creation_date).getTime();
      });
    });
  }

  addTask(): void {
    if (!this.newTask.title || !this.newTask.description || !this.newTask.category) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    this.newTask.creation_date = new Date();
    this.taskService.addTask(this.newTask).subscribe((task) => {
      this.tasks.push(task);
      this.newTask = { title: '', description: '', category: '', creation_date: new Date() };
    });
  }

  deleteTaskIfExists(id?: number): void {
    if (id !== undefined) {
      this.deleteTask(id);
    }
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    });
  }
}
