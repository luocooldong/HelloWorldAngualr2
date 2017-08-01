import { HolloWorldPage } from './app.po';

describe('hollo-world App', () => {
  let page: HolloWorldPage;

  beforeEach(() => {
    page = new HolloWorldPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
