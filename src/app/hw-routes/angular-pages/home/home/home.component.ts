import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public titleCenzor = `Algular list of prohibited words`;
  public titleUserList = `Algular task list`;
  public titleTaskList = `Algular users list`;
  constructor() { }

  ngOnInit(): void {
  }

}
