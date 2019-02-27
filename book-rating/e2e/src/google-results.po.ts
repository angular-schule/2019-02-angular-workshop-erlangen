import { $, $$ } from 'protractor';

export class GoogleResultsPage {
  getResults() {
    const resultsContainer = $('div.srg');
    return resultsContainer.$$('div.g');
  }

  getKnowledgePanel() {
    return $('div.knowledge-panel');
  }

  getFirstResultUrl() {
    return this.getResults()
      .first()
      .$('cite.iUh30');
  }

}
