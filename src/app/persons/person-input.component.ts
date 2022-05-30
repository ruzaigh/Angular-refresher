import { Component } from "@angular/core";
import { PersonsService } from "./persons.service";

@Component({
  selector: 'app-person-input',
  templateUrl: '../persons/person-input.componet.html',
  styleUrls: ['../persons/person-input.component.css']
})

export class PersonInputComponent{
  constructor(private prsService: PersonsService){}

  enteredPersonName = '';
  onCreatePerson(){
    this.prsService.addPersons(this.enteredPersonName);
  }


}
