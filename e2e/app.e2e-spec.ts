import { Angular2SpaPage } from './app.po';

describe('angular2-spa App', () => {
  let page: Angular2SpaPage;

  beforeEach(() => {
    page = new Angular2SpaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
