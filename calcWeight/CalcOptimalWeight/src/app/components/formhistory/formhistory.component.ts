import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-formhistory',
  templateUrl: './formhistory.component.html',
  styleUrls: ['./formhistory.component.css']
})
export class FormhistoryComponent implements OnInit {

  public peoples: Array<any>;

  constructor(private dateService: DataserviceService) { }

  ngOnInit() {
  }

  getHistory() {
    this.peoples = this.dateService.getPersons();
  }
}
