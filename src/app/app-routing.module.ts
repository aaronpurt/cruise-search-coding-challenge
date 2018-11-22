import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookingComponent } from "./booking/booking.component";
import { ItinerariesComponent } from "./itineraries/itineraries.component";
import { ViewItineraryComponent } from "./view-itinerary/view-itinerary.component";
const routes: Routes = [
  { path: "", component: ItinerariesComponent },
  { path: "book", component: BookingComponent },
  { path: "itinerary/:id", component: ViewItineraryComponent }
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
