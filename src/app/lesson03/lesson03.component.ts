import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson03',
  templateUrl: './lesson03.component.html',
  styleUrls: ['./lesson03.component.scss']
})
export class Lesson03Component implements OnInit {
  public user = `Oleksij Vynnyk`;
  public taskList!: string;
  public arrDb: Array<any> = [];
  public numInd!: number;
  public str!: string;

  public editor = false;

  constructor() { }

  ngOnInit(): void {
  }
  addTasks(): Array<any> {
    let item = {
      tasks: ``,
      checked: false,
      taskStatus: `in Progress`,
      class: `red`,
      deleteB: `true`,
      deleteClass: `disebled`,
    }
    let taskList = document.querySelector(`input[type="text"]`) as HTMLInputElement;
    item.tasks = taskList.value;

    this.arrDb.push(item);
    taskList.value = ``;
    // this.numInd = this.arrDb.length;
    console.log(this.arrDb)
    return this.arrDb;
  }

  edit(data: number): any {

    this.numInd = data;
    this.str = this.arrDb[this.numInd].tasks;
    this.editor = !this.editor;
  }

  saveEditor(): void {
    let inputStr = document.querySelector(`.modal input[type="text"]`) as HTMLInputElement;
    this.arrDb[this.numInd].tasks = inputStr.value;
    console.log(inputStr.value)
    this.editor = !this.editor;
  }
}
