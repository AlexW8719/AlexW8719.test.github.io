import { Pipe, PipeTransform } from '@angular/core';
import { phoneBook } from './hw05.component'
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: phoneBook[], field: string): phoneBook[] {
    if (!value) return [];
    if (!field) return value;
    if (!field) return value;
    if (Number(field) < 0 || Number(field) >= 0) return value.filter(arrPhoneBook => arrPhoneBook.numbers.includes(field))
    return value.filter(arrPhoneBook => arrPhoneBook.name.toLowerCase().includes(field.toLowerCase()));
  }

}
