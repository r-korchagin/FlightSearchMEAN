import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

@Injectable()
export class AirportsService {

  constructor(private http: Http) { }

  fetchData(){
    /* Prod */
    //return this.http.get('/airports')
    /* Dev */
    return this.http.get('../public/airports.json')
    // Retry this request up to 3 times.
   .retry(3)
   // Maping result into Object
   .map(
      (res) => res.json()
    );
  }

}
