import { browser, $ } from 'protractor';
import { GoogleResultsPage } from './google-results.po';

export class GooglePage {
  navigateTo() {
    browser.get('https://www.google.de/');
    return this;
  }

  search(searchTerm: string) {
    const searchContainer = $('form#tsf');
    const input = searchContainer.$('input#lst-ib');

    // eingeben
    input.sendKeys(searchTerm);

    // abschicken
    searchContainer.submit();

    return new GoogleResultsPage();
  }
}
