import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookingComponent } from "./booking/booking.component";
import { ItinerariesComponent } from "./itineraries/itineraries.component";
import { ItinerarySingleComponent } from "./itinerary-single/itinerary-single.component";
const routes: Routes = [
  { path: "", component: ItinerariesComponent },
  { path: "book", component: BookingComponent },
  { path: "itinerary/:id", component: ItinerarySingleComponent }
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
