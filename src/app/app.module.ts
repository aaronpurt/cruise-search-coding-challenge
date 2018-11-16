import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ItinerariesComponent } from "./itineraries/itineraries.component";
import { AppRoutingModule } from ".//app-routing.module";
import { BookingComponent } from "./booking/booking.component";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MapComponent } from './map/map.component';
import { ItinerarySingleComponent } from './itinerary-single/itinerary-single.component';
import { LowestOptionComponent } from './lowest-option/lowest-option.component';
import { StateRoomsComponent } from './state-rooms/state-rooms.component';
import { ViewItineraryComponent } from './view-itinerary/view-itinerary.component';
const AngularMaterial = [MatCardModule, MatButtonModule];
@NgModule({
  declarations: [AppComponent, ItinerariesComponent, BookingComponent, MapComponent, ItinerarySingleComponent, LowestOptionComponent, StateRoomsComponent, ViewItineraryComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ...AngularMaterial
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
