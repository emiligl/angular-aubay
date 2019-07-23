import { HomePage } from './Home.po';
import { browser, logging } from 'protractor';

describe('workspace-project Home', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Angular Aubay');
  });

  it('should behave in the footer the author name', () => {
    page.navigateTo();
    let autor = 'Emilio De la Iglesia'
    expect(page.getFooterText()).toContain(autor);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
