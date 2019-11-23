import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { CalcserviceService } from 'src/app/services/calcservice.service';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-formcalc',
  templateUrl: './formcalc.component.html',
  styleUrls: ['./formcalc.component.css']
})
export class FormcalcComponent implements OnInit {
  person: Person;

  constructor(private calcService: CalcserviceService, private dateService: DataserviceService ) {
    this.person = new Person();
  }

  ngOnInit() {
  }

  onCheckWeight() {

    if (!this.isPersonValid()) {
      alert('Something is wrong. Please check inputs.');
      return;
    }

    this.person = this.calcService.getOptimalWeight(this.person);
    this.dateService.savePerson(this.person);

    const message = this.person.optimalWeight;
    this.person = new Person();
    alert(message);
  }

  isPersonValid(): boolean {

    if (this.person.age == null || this.person.height == null || this.person.weight == null) {
      return false;
    }

    if (this.person.age < 0 || this.person.height < 1 || this.person.weight < 1) {
      return false;
    }

    return true;
  }

}
