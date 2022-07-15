import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child03',
  templateUrl: './child03.component.html',
  styleUrls: ['./child03.component.scss']
})
export class Child03Component implements OnInit {
  @Input() task!: Array<any>;
  @Output() fromChild = new EventEmitter<number>();

  editContent!: string;



  constructor() { }

  ngOnInit(): void {
  }
  statusTask(i: number): void {
    if (this.task[i].checked == false) {
      this.task[i].class = `green`;
      this.task[i].checked = true;
      this.task[i].taskStatus = `Done`;
      this.task[i].deleteB = false;
      this.task[i].deleteClass = `done`;

    } else if (this.task[i].checked == true) {
      this.task[i].class = `red`;
      this.task[i].checked = false;
      this.task[i].taskStatus = `in Progress`;
      this.task[i].deleteB = true;
      this.task[i].deleteClass = `disebled`;
    }
  }

  deleteTask(i: number): void {
    this.task.splice(i, 1);
  }

  takeInfo(i: number): void {
    this.fromChild.emit(i)
  }
}
