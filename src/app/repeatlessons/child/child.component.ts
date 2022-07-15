import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() userName!: string;
  private _userAge!: number;
  // @Input() userAge!: number;
  @Input()
  set userAge(age: number) {
    if (age < 0) this._userAge = 0;
    else if (age > 60) this._userAge = 60;
    else this._userAge = 60;

  }
  constructor() { }

  ngOnInit(): void {
  }

}
