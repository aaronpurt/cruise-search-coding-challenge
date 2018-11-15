import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ItinerariesComponent } from "./itineraries/itineraries.component";

@NgModule({
  declarations: [AppComponent, ItinerariesComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
