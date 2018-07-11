import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  taskName ;
  @Output() taskNameEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  addTask() {
    console.log(this.taskName);
    this.taskNameEvent.emit(this.taskName);
  }
}
