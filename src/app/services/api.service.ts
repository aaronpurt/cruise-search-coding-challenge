import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { raw_data } from "src/assets/raw_data";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  URI_ENDPOINT =
    "https://qabook.hollandamerica.com/api/cruiseSearch/v1/api/search/itineraries?country=US&limit=10&skip=0";

  constructor(private http: HttpClient) {}

  // async data from back-end
  getData() {
    return this.http.get(this.URI_ENDPOINT);
  }

  // raw_data js objects, for testing
  getRawData() {
    return raw_data;
  }
}
