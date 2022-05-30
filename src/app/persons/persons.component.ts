import { Component, OnDestroy, OnInit } from "@angular/core"
import { Subscription } from "rxjs";
import { PersonsService } from "./persons.service";

@Component({
  selector: 'app-persons',
  templateUrl: '../persons/persons.component.html'
})
export class PersonsComponent implements OnInit, OnDestroy{
  personsList: string[] = [];
  private personListSubs: Subscription = new Subscription;
  // one way of doing it
  // how we make a service available component-wode with this property
  // private-cant acces it from inside the template
  // can not acces it through other components
  // private personService: PersonsService;

  constructor(private prsService: PersonsService){
    // and we instantiate the service here
    // this.personService = prsService;
  }
  ngOnDestroy(): void {
    // have to unsbscirbe
    this.personListSubs.unsubscribe();
  }
  ngOnInit(){
    this.personsList = this.prsService.persons
    // when we want to listen to a new value "subscribe"
    // arrow function will emit when a new value is emitted
    this.personListSubs = this.prsService.personsChanged.subscribe(persons =>{
      this.personsList = persons
    })
  }
  onRemovePerson(personName: string){
    this.prsService.removePerson(personName);
  }
}
