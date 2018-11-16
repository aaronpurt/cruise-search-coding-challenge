import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-view-itinerary",
  templateUrl: "./view-itinerary.component.html",
  styleUrls: ["./view-itinerary.component.sass"]
})
export class ViewItineraryComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  id = null; // itinerary id

  ngOnInit() {
    // extract itinerary id from route
    this.id = this.route.snapshot.paramMap.get("id");
  }
}
