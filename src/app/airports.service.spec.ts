/* tslint:disable:no-unused-variable */
import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, Http, BaseRequestOptions, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { AirportsService } from './airports.service';
import { MockBackend } from '@angular/http/testing';

describe('AirportsService', () => {

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpModule],
        providers: [
          AirportsService,
          { provide: XHRBackend, useClass: MockBackend }
      ]
    });

  });


  describe('getAirports', () => {

    it('should return an Observable<Array<Airports>>',
        inject([AirportsService , XHRBackend ], (airoprtService , mockBackend) => {

          const mockResponse = [
                {"airportCode":"JFK","airportName":"John F Kennedy Intl","cityCode":"NYC","cityName":"New York","countryCode":"US","countryName":"United States","latitude":40.639751,"longitude":-73.778925,"stateCode":"NY","timeZone":"America/New_York"}
              ];

          mockBackend.connections.subscribe((connection) => {
            connection.mockRespond(new Response(new ResponseOptions({
               body: JSON.stringify(mockResponse)
            })));
          });

          airoprtService.fetchData().subscribe(
            data => {
            expect(data.length).toBe(1);
            expect(data[0].airportCode).toEqual('JFK');
            expect(data[0].airportName).toEqual('John F Kennedy Intl');
            expect(data[0].cityCode).toEqual('NYC');
          },
          err => {
            expect(err).toBe(undefined);
          }
        );
      })
    );

  });

});
