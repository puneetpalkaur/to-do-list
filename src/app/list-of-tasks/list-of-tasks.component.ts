import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-list-of-tasks',
  templateUrl: './list-of-tasks.component.html',
  styleUrls: ['./list-of-tasks.component.css']
})
export class ListOfTasksComponent implements OnInit {
  @Input() taskList: string;
  @Output() toRemove = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  close(remove) {
    // console.log('clicked ');
    this.toRemove.emit(remove);
  }
}
