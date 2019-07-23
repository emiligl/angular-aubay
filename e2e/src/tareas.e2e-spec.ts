import { TareasPage } from './tareas.po';
import { browser, logging } from 'protractor';

describe('workspace-project Tareas', () => {
  let page: TareasPage;

  beforeEach(() => {
    page = new TareasPage();
  });

  it('should display tittle h2', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Tareas');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
