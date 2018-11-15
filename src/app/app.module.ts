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
const AngularMaterial = [MatCardModule, MatButtonModule];
@NgModule({
  declarations: [AppComponent, ItinerariesComponent, BookingComponent, MapComponent],
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
