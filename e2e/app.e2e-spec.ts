import { FlightSearchPage } from './app.po';

describe('flight-search App', function() {
  let page: FlightSearchPage;

  beforeEach(() => {
    page = new FlightSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
