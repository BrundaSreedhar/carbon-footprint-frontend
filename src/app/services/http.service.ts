import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '../models/location/location.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  computeDistance(origins: Location, destinations: Location, mode: string, vehicle: string) {
    let originString: string = origins.latitude.toString() + "," + origins.longitude.toString();
    let destString: string = destinations.latitude.toString() + "," + destinations.longitude.toString();
    console.log("Src: ", originString);
    console.log("Dest: ", destString);
    return this.httpClient.post('http://localhost:3000/getDistance',
      { "origins": [originString], "destinations": [destString], "mode": mode, "vehicle": vehicle });
  }
}