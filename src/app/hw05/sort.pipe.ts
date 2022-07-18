import { Pipe, PipeTransform } from '@angular/core';
import { phoneBook } from './hw05.component'

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: phoneBook[], sort: string): phoneBook[] {
    if (!value) return [];
    if (!sort) return value;

    if (sort === 'aName') {
      return value.sort((a, b) => (a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0)
    };

    if (sort === 'zName') {
      return value.sort((a, b) => (a.name < b.name) ? 1 : (a.name > b.name) ? -1 : 0)
    };

    if (sort === 'aLName') {
      return value.sort((a, b) => (a.lastName > b.lastName) ? 1 : (a.lastName < b.lastName) ? -1 : 0)
    };

    if (sort === 'zLName') {
      return value.sort((a, b) => (a.lastName < b.lastName) ? 1 : (a.lastName > b.lastName) ? -1 : 0)
    };

    if (sort === 'aNum') {
      return value.sort((a, b) => (a.numbers > b.numbers) ? 1 : (a.numbers < b.numbers) ? -1 : 0)
    };

    if (sort === 'zNum') {
      return value.sort((a, b) => (a.numbers < b.numbers) ? 1 : (a.numbers > b.numbers) ? -1 : 0)
    };
    return value;
  }
};
