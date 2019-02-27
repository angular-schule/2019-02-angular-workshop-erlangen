import { $, browser } from 'protractor';

describe('Angular Buch', () => {

  beforeAll(() => {
    browser.waitForAngularEnabled(false);
  });

  it('should be called, not AngularJS please!', () => {

      browser.get('https://www.dpunkt.de/buecher/12400/9783864903571-angular.html');
      const heading = $('h1');
      expect(heading.getText()).toEqual('Angular');
      browser.sleep(4000);
  });

  afterAll(() => {
    browser.waitForAngularEnabled(true);
  });
});
