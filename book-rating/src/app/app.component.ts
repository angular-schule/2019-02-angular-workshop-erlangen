import { Component } from '@angular/core';
import { State } from './reducers';
import { Store } from '@ngrx/store';
import { ChangeConfig } from './actions/config.actions';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Book Rating';

  constructor(private store: Store<State>) {

  }

  changeConfig() {
    const newConf = {
      isAdmin: true
    };

    this.store.dispatch(new ChangeConfig({ config: newConf }));
  }
}
