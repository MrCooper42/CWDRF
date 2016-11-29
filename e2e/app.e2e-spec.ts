import { CwdrfPage } from './app.po';

describe('cwdrf App', function() {
  let page: CwdrfPage;

  beforeEach(() => {
    page = new CwdrfPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
