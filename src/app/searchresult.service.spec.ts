/* tslint:disable:no-unused-variable */

  import { TestBed, inject } from '@angular/core/testing';
  import { HttpModule, Http, BaseRequestOptions, XHRBackend, Response, ResponseOptions } from '@angular/http';
  import { MockBackend } from '@angular/http/testing';

  import { SearchresultService } from './searchresult.service';

  describe('AirportsService', () => {

    beforeEach(() => {

      TestBed.configureTestingModule({
        imports: [HttpModule],
          providers: [
            SearchresultService,
            { provide: XHRBackend, useClass: MockBackend }
        ]
      });

    });


    describe('getAirports', () => {

      it('should return an Observable<Array<Airports>>',
          inject([SearchresultService , XHRBackend ], (searchService , mockBackend) => {

            const mockResponse = [{"key":"5948d0cb55e4e17403ee4be5",
              "flightNum":163,
              "distance":1265,
              "durationMin":95,
              "price":145.83,
              "plane":{
                "code":"333",
                "shortName":"Airbus A330-300",
                "fullName":"Airbus Industrie A330-300",
                "manufacturer":"Airbus",
                "model":"A330-300"},
              "finish":{
                "dateTime":"2018-09-05T00:23:00.000Z",
                "airportCode":"JFK",
                "airportName":"John F Kennedy Intl",
                "cityCode":"NYC",
                "cityName":"New York",
                "countryCode":"US",
                "countryName":"United States",
                "latitude":40.639751,
                "longitude":-73.778925,
                "stateCode":"NY",
                "timeZone":"America/New_York"},
              "start":{
                "dateTime":"2018-09-04T22:48:00.000Z",
                "airportCode":"YQY",
                "airportName":"Sydney Airport",
                "cityCode":"YQY",
                "cityName":"Sydney",
                "countryCode":"CA",
                "countryName":"Canada",
                "latitude":46.161388,
                "longitude":-60.047779,
                "stateCode":"NS",
                "timeZone":"America/Halifax"},
              "airline":{
                "code":"QF",
                "name":"Qantas"}
                }];

            mockBackend.connections.subscribe((connection) => {
              connection.mockRespond(new Response(new ResponseOptions({
                 body: JSON.stringify(mockResponse)
              })));
            });

            searchService.fetchData({from:"JFK",to:"MFK",date:"2018-09-05"}).subscribe(
              data => {
              expect(data.length).toBe(1);
              expect(data[0].flightNum).toEqual(163);
              expect(data[0].distance).toEqual(1265);
              expect(data[0].plane.shortName).toEqual("Airbus A330-300");
            },
            err => {
              expect(err).toBe(undefined);
            }
          );
        })
      );

    });

  });
