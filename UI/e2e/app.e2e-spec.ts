import { CvPage } from './app.po';

describe('cv App', () => {
  let page: CvPage;

  beforeEach(() => {
    page = new CvPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
