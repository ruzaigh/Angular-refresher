import { Component, Input } from "@angular/core"

@Component({
  selector: 'app-persons',
  templateUrl: '../persons/persons.component.html'
})
export class PersonsComponent{

@Input() personsList: string[] = [];

}
