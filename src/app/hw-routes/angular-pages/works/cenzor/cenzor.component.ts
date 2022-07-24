import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent implements OnInit {

  public list = ``;
  constructor() { }

  ngOnInit(): void {
  }
  addBadWords(): void {
    let inputText = document.querySelector(`input[type="text"]`) as HTMLInputElement;

    if (this.list == ``) {
      this.list += `${inputText.value}`;
    } else { this.list += `, ${inputText.value}`; }
    inputText.value = ``;
  }
  resetLists(): void {
    let textarea = document.querySelector(`textarea`) as HTMLTextAreaElement;
    this.list = ``;
    textarea.value = ``;
  }

  cenzorList(): void {
    let textarea = document.querySelector(`textarea`) as HTMLTextAreaElement;

    if (this.list !== null) {
      let arr1: Array<string> = this.list.split(`, `);
      let arr2: Array<string> = textarea.value.split(` `);
      for (let i = 0; i < arr1.length; i++) {
        for (let n = 0; n < arr2.length; n++) {
          if (arr1[i] == arr2[n]) {
            let arr3 = arr2[n].split(``)
            arr3.forEach(function (value, index, Array): void {
              Array[index] = `*`;
            })
            arr2[n] = arr3.join(``)
          }

        }
      }
      textarea.value = arr2.join(` `);

    }
    if (textarea.value == ``) {
      alert(`Заповніть поле!`)
    }
  }
}
