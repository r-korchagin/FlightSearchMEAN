import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

@Injectable()
export class SearchresultService {

  constructor(private http: Http ) { }

  fetchData(requestOptions){
    let params: URLSearchParams = new URLSearchParams();
    if (requestOptions.from !== undefined) params.set('from', requestOptions.from );
    if (requestOptions.to !== undefined) params.set('to', requestOptions.to);
    if (requestOptions.date !== undefined) params.set('date', requestOptions.date);

    let options = new RequestOptions();
    options.search = params;

    return this.http.get('../public/searchresult.json', options)
    //return this.http.get('/flight_search/', options)
    // Retry this request up to 3 times.
   .retry(3)
   // Maping result into Object
   .map(
      (res) => res.json()
    );
  }

}
