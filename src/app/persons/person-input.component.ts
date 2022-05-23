import { Component } from "@angular/core";

@Component({
  selector: 'app-person-input',
  templateUrl: '../persons/person-input.componet.html',
  styleUrls: ['../persons/person-input.component.css']
})

export class PersonInputComponent{
   enteredPersonName = '';

  onCreatePerson(){
    console.log('Created a person',  this.enteredPersonName)
    this.enteredPersonName = '';
  }

}
