import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hw05',
  templateUrl: './hw05.component.html',
  styleUrls: ['./hw05.component.scss'],
})
export class HW05Component implements OnInit {

  public arrPhoneBook: phoneBook[] = [];

  public modalAdd = false;
  public modalEdit = false;

  public nameEd !: string;
  public lastNameEd !: string;
  public numEd !: string;

  public index !: number;

  public field = ``;
  public type = false;
  public str = ``;

  public arrName = {
    class: `none`,
  }

  public arrLName = {
    class: `none`,
  }

  public arrNum = {
    class: `none`,
  }
  constructor() { }

  ngOnInit(): void {
  }

  openModaAdd(): void {
    this.modalAdd = !this.modalAdd;
  }

  craeteNewItems(): void {
    let phoneBookList = {
      name: ``,
      lastName: ``,
      numbers: ``,
    }
    let n = document.querySelector(`input.name`) as HTMLInputElement
    let ln = document.querySelector(`input.lastName`) as HTMLInputElement
    let num = document.querySelector(`input.numbers`) as HTMLInputElement

    phoneBookList.name = n.value;
    phoneBookList.lastName = ln.value;
    phoneBookList.numbers = num.value;

    this.arrPhoneBook.push(phoneBookList)
    this.modalAdd = !this.modalAdd;

    console.log(this.arrPhoneBook)
  }

  saveEdit(): void {

    let n = document.querySelector(`input.edName`) as HTMLInputElement
    let ln = document.querySelector(`input.edLastName`) as HTMLInputElement
    let num = document.querySelector(`input.edNumbers`) as HTMLInputElement

    this.arrPhoneBook[this.index].name = n.value;
    this.arrPhoneBook[this.index].lastName = ln.value;
    this.arrPhoneBook[this.index].numbers = num.value;


    this.modalEdit = !this.modalEdit;

  }

  openEditItems(i: number): number {
    this.modalEdit = !this.modalEdit;

    this.nameEd = this.arrPhoneBook[i].name;
    this.lastNameEd = this.arrPhoneBook[i].lastName;
    this.numEd = this.arrPhoneBook[i].numbers;

    this.index = i;

    return this.index;
  }

  closeEdit() {
    this.modalEdit = !this.modalEdit;
  }

  delete(i: number): void {
    this.arrPhoneBook.splice(i, 1)
  }

  changeSortName(str: string): void {
    this.type = !this.type

    if (this.type === true) {
      str = `aName`
      this.str = str;
      this.arrName.class = `down`;
      this.arrLName.class = `none`;
      this.arrNum.class = `none`;
    }

    if (this.type === false) {
      str = `zName`;
      this.str = str;
      this.arrName.class = `up`;
      this.arrLName.class = `none`;
      this.arrNum.class = `none`;
    }
  }

  changeSortLName(str: string): void {
    this.type = !this.type

    if (this.type === true) {
      str = `aLName`
      this.str = str;
      this.arrName.class = `none`;
      this.arrLName.class = `down`;
      this.arrNum.class = `none`;
    }

    if (this.type === false) {
      str = `zLName`;
      this.str = str;
      this.arrName.class = `none`;
      this.arrLName.class = `up`;
      this.arrNum.class = `none`;
    }

  }

  changeSortNum(str: string): void {
    this.type = !this.type

    if (this.type === true) {
      str = `aNum`
      this.str = str;
      this.arrName.class = `none`;
      this.arrLName.class = `none`;
      this.arrNum.class = `down`;
    }

    if (this.type === false) {
      str = `zNum`;
      this.str = str;
      this.arrName.class = `none`;
      this.arrLName.class = `none`;
      this.arrNum.class = `up`;
    }

  }
}

export interface phoneBook {
  name: string;
  lastName: string;
  numbers: string;
}