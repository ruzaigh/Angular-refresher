import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PersonsService {
  // Subject very simailar to event emitters
  // we can manage and emit data
  personsChanged = new Subject<string[]>();
  persons: string[] = ['Max', 'Manuel', 'Anna'];

  addPersons(name: string) {
    this.persons.push(name);
    // sending a new value "next()"
    this.personsChanged.next(this.persons);
  }

  removePerson(name: string) {
    this.persons = this.persons.filter((person) => {
      return person !== name;
    });
    this.personsChanged.next(this.persons);
  }
}
