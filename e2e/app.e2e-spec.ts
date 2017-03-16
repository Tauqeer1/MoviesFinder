import { MoviesFinderPage } from './app.po';

describe('movies-finder App', () => {
  let page: MoviesFinderPage;

  beforeEach(() => {
    page = new MoviesFinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
