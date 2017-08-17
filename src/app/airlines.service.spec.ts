/* tslint:disable:no-unused-variable */

  import { TestBed, inject } from '@angular/core/testing';
  import { HttpModule, Http, BaseRequestOptions, XHRBackend, Response, ResponseOptions } from '@angular/http';
  import { MockBackend } from '@angular/http/testing';

  import { AirlinesService } from './airlines.service';

  describe('AirportsService', () => {

    beforeEach(() => {

      TestBed.configureTestingModule({
        imports: [HttpModule],
          providers: [
            AirlinesService,
            { provide: XHRBackend, useClass: MockBackend }
        ]
      });

    });


    describe('getAirports', () => {

      it('should return an Observable<Array<Airports>>',
          inject([AirlinesService , XHRBackend ], (airlinesService , mockBackend) => {

            const mockResponse = [{"code":"SU","name":"Aeroflot"},
              {"code":"MU","name":"China Eastern"},
              {"code":"EK","name":"Emirates"},
              {"code":"KE","name":"Korean Air lines"},
              {"code":"QF","name":"Qantas"},
              {"code":"SQ","name":"Singapore Airlines"}];

            mockBackend.connections.subscribe((connection) => {
              connection.mockRespond(new Response(new ResponseOptions({
                 body: JSON.stringify(mockResponse)
              })));
            });

            airlinesService.fetchData().subscribe(
              data => {
              expect(data.length).toBe(6);
              expect(data[0].code).toEqual('SU');
              expect(data[0].name).toEqual('Aeroflot');
            },
            err => {
              expect(err).toBe(undefined);
            }
          );
        })
      );

    });

  });
