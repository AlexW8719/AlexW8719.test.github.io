import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public title = ``;
  constructor() { }

  ngOnInit(): void {
  }


}
setInterval((): void => {
  let h1 = document.querySelector(`h1`) as HTMLElement;

  if (document.location.pathname == `/home`) {
    h1.textContent = `Angular list of previous task`
  }

  if (document.location.pathname == '/works/censor') {
    h1.textContent = `Algular list of prohibited words`
  }

  if (document.location.pathname == '/works/userlist') {
    h1.textContent = `Algular users list`
  }

  if (document.location.pathname == '/works/tasklist') {
    h1.textContent = `Algular task list`
  }
});