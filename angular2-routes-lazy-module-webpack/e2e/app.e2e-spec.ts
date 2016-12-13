import { Angular2RoutesLazyModulePage } from './app.po';

describe('angular2-routes-lazy-module App', function() {
  let page: Angular2RoutesLazyModulePage;

  beforeEach(() => {
    page = new Angular2RoutesLazyModulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
