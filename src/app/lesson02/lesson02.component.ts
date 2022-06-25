import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson02',
  templateUrl: './lesson02.component.html',
  styleUrls: ['./lesson02.component.scss']
})
export class Lesson02Component implements OnInit {
  public userName!: string;
  public userPass!: string;
  public userEmail!: string;
  public arr: Array<any> = [];
  public stEdit = false;
  public a!: number;

  constructor() { }

  ngOnInit(): void {
  }
  takeInfo(): void {
    let dataBase = {
      login: this.userName,
      password: this.userPass,
      email: this.userEmail,
    };
    this.arr.push(dataBase);
    this.userName = ``;
    this.userPass = ``;
    this.userEmail = ``;
  }
  deleteUser(i: number): void {
    this.arr.splice(i, 1);
  }
  editUser(i: number): void {
    this.stEdit = !this.stEdit;
    this.userName = `${this.arr[i].login}`;
    this.userPass = `${this.arr[i].password}`;
    this.userEmail = `${this.arr[i].email} `;
    this.a = i;
  }

  changeInfo(): void {
    this.arr[this.a].login = this.userName;
    this.arr[this.a].password = this.userPass;
    this.arr[this.a].email = this.userEmail;
    this.stEdit = !this.stEdit;
    this.userName = ``;
    this.userPass = ``;
    this.userEmail = ``;
  }
}
