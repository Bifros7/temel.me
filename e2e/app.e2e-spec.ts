import { AngularMaterial2SeedPage } from './app.po';

describe('angular-material2-seed App', function() {
  let page: AngularMaterial2SeedPage;

  beforeEach(() => {
    page = new AngularMaterial2SeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
