import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ItinerariesComponent } from "./itineraries/itineraries.component";
import { AppRoutingModule } from ".//app-routing.module";
import { BookingComponent } from "./booking/booking.component";
import { MatCardModule } from "@angular/material/card";

const AngularMaterial = [MatCardModule];
@NgModule({
  declarations: [AppComponent, ItinerariesComponent, BookingComponent],
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
