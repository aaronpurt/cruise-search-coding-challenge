import { Component, OnInit } from "@angular/core";
import { raw_data } from "src/assets/raw_data";

import { MapComponent } from "../map/map.component";

@Component({
  selector: "app-itineraries",
  templateUrl: "./itineraries.component.html",
  styleUrls: ["./itineraries.component.sass"]
})
export class ItinerariesComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log(raw_data);
  }
}
