import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repeatlessons',
  templateUrl: './repeatlessons.component.html',
  styleUrls: ['./repeatlessons.component.scss']
})
export class RepeatlessonsComponent implements OnInit {
  public myName = `Ivan`;
  public age = 35;

  constructor() { }

  ngOnInit(): void {
  }

}
