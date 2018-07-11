import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskName: string[] = [];
  getTasks(tName: string) {
    this.taskName.push(tName);

  }
  getRemove(remove: string ) {
    this.taskName.splice(this.taskName.indexOf(remove), 1);
  }
}
