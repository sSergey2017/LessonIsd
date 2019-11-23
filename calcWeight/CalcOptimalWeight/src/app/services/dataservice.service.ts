import { Injectable } from '@angular/core';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private storageKey = 'optomalWeight';
  constructor() { }

  public savePerson(person: Person): void {
    const persons = this.getPersons();
    persons.push(person);
    localStorage.setItem(this.storageKey, JSON.stringify(persons));
  }

  public getPersons(): Person[] {
    const jsonPersons = localStorage.getItem(this.storageKey);
    return jsonPersons != null ? JSON.parse(jsonPersons) : [];
  }
}
