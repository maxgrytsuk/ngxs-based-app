import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Provider, PROVIDER_FIELDS } from './providers.config';
import { SetProvider, GetItems, SortItems } from './provider.action';

import { Sort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';

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

  displayedColumns: string[];
  data: any[];
  selection = new SelectionModel(true, []);

  constructor(private store: Store) {
    this.items$ = this.store.select(state => state.provider.items);
    this.provider$ = this.store.select(state => state.provider.provider);
    this.items$.subscribe(data => this.data = data);
    this.provider$.subscribe(provider => this.displayedColumns = PROVIDER_FIELDS[provider]);
  }

  ngOnInit() {
  }

  setProvider(event) {
    this.store.dispatch(new SetProvider(event.value));
  }

  getItems() {
    this.store.dispatch(new GetItems());
  }

  sortData(sort: Sort) {
    this.store.dispatch(new SortItems(sort));
  }

}
