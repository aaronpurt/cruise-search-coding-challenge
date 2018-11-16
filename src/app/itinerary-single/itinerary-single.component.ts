import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-itinerary-single",
  templateUrl: "./itinerary-single.component.html",
  styleUrls: ["./itinerary-single.component.sass"]
})
export class ItinerarySingleComponent implements OnInit {
  @Input() itinerary;
  voyageInfo = null;
  lowestOption = null;
  stateRooms = [];

  constructor() {}

  ngOnInit() {
    const voyage = this.itinerary.voyages[0];
    console.log("log from single voyage ", voyage);
    this.voyageInfo = this.getFirstVoyageInfo(voyage);
    this.lowestOption = this.getLowestOption(voyage);
    this.stateRooms = this.getStateRooms(voyage);
    console.warn(this.voyageInfo);
    console.log("stateRooms: ", this.stateRooms);
  }

  // for this exercise we are just concerned about the first voyage
  /* @return
  {
    dateDepart: timestamp
    ship: object
    disembarkPort: (depart) Object
    destination: array[Object]
  }
  */
  getFirstVoyageInfo(voyage) {
    return {
      itinerary: voyage.itinerary,
      dateDepart: voyage.dateDepart,
      ship: voyage.ship,
      disembarkPort: voyage.disembarkPort,
      destination: voyage.destination
    };
  }

  getLowestOption(voyage) {
    return {
      lowestVoyagePrice: 1029
    };
  }

  getStateRooms(voyage) {
    return voyage.stateRooms;
  }
}
