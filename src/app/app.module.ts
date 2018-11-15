import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ItinerariesComponent } from "./itineraries/itineraries.component";
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [AppComponent, ItinerariesComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
