import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";

@Component({
  selector: "app-itineraries",
  templateUrl: "./itineraries.component.html",
  styleUrls: ["./itineraries.component.sass"]
})
export class ItinerariesComponent implements OnInit {
  itineraries = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // Todo: Disable CORS
    // Test with API call
    // this.apiService.getData().subscribe(
    //   res => {
    //     console.log("resp from api: ", res);
    //     this.itineraries = this.getItineraries(res);
    //   },
    //   err => {
    //     console.error(err);
    //     console.warn("NEED TO disable cors on the server");
    //   }
    // );

    const raw_data = this.apiService.getRawData();
    this.itineraries = this.getItineraries(raw_data);
    // console.log(this.itineraries);
  }

  getItineraries(response) {
    const data = response.data[0];
    if (data && data.attributes && data.attributes.itineraries) {
      // use only the first 5 itineraries for sample data,
      // since other itineraries are missing fare /or need more validation
      return data.attributes.itineraries.slice(0, 5);
    }
    console.log("Invalid data");
    return null;
  }
}
