import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookingComponent } from "./booking/booking.component";
import { ItinerariesComponent } from "./itineraries/itineraries.component";
const routes: Routes = [
  { path: "", component: ItinerariesComponent },
  { path: "booking", component: BookingComponent }
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
