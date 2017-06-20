import { MaterialWebpackPage } from './app.po';

describe('material-webpack App', function() {
  let page: MaterialWebpackPage;

  beforeEach(() => {
    page = new MaterialWebpackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
