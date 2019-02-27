import { GooglePage } from './google.po';
import { browser } from 'protractor';
import { GoogleResultsPage } from './google-results.po';

describe('Google', () => {

  beforeAll(() => {
    browser.waitForAngularEnabled(false);
  });

  let googlePage: GooglePage;
  let resultsPage: GoogleResultsPage;

  beforeEach(() => {
    googlePage = new GooglePage();

    resultsPage = googlePage
      .navigateTo()
      .search('Angular');
  });


  it('should show knowledge panel with description', () => {
    const panel = resultsPage.getKnowledgePanel();
    expect(panel.getText())
      .toContain('Angular is a TypeScript-based open-source front-end web application platform');
  });

 it('should show Angular.io as first result', () => {
    const url = resultsPage.getFirstResultUrl().getText();
    expect(url).toBe('https://angular.io/');
  });

  afterAll(() => {
    browser.waitForAngularEnabled(true);
  });
});
