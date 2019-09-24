import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { GetItems, ProviderState, SetProvider } from '../state/provider.state';
import { Observable } from 'rxjs';
import { Provider } from '../providers.config';

export interface ProviderView {
  value: Provider;
  viewValue: string;
}
@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss']
})
export class ProviderComponent implements OnInit {
  providers: ProviderView[] = [
    { value: 'countries', viewValue: 'Countries' },
    { value: 'wiki', viewValue: 'Wiki' },
  ];

  items$: Observable<any[]>;
  provider$: Observable<Provider>;

  constructor(private store: Store) {
    this.items$ = this.store.select(state => state.provider.items);
    this.provider$ = this.store.select(state => state.provider.provider);
  }

  ngOnInit() {
  }

  setProvider(event) {
    this.store.dispatch(new SetProvider(event.value));
  }

  getItems() {
    this.store.dispatch(new GetItems());
  }

}
