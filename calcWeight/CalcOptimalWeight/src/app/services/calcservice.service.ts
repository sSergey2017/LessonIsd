import { Injectable } from '@angular/core';
import { Person } from '../models/person';


@Injectable({
  providedIn: 'root'
})
export class CalcserviceService {

  constructor() { }

  public getOptimalWeight(person: Person): Person {
    if (person.age <= 40) {
      console.log(person.age);
      if (person.height - 110 <= person.weight) {
        console.log(person.height);
        console.log(person.weight);

        console.log(person.height - 110 <= person.weight);
        person.optimalWeight = 'optimal';
      } else {
        person.optimalWeight =  'not optimal';
      }
    } else {
      console.log(person.age);
      if (person.height - 100 <= person.weight) {
        console.log(person.height - 100 <= person.weight);
        person.optimalWeight =  'optimal';
      } else {
        person.optimalWeight =  'not optimal';
      }
    }
    return person;
  }
}
