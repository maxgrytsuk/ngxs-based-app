import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetItems, SetProvider, PROVIDER_FIELDS } from './provider.state';
import { Observable, of } from 'rxjs';
import { Provider } from '../providers.config';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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
  dataSource = new MatTableDataSource();
  selection = new SelectionModel(true, []);
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private store: Store) {
    this.items$ = this.store.select(state => state.provider.items);
    this.provider$ = this.store.select(state => state.provider.provider);
    this.provider$.subscribe(provider => this.displayedColumns = PROVIDER_FIELDS[provider]);
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  setProvider(event) {
    this.store.dispatch(new SetProvider(event.value));
  }

  getItems() {
    this.store.dispatch(new GetItems());
  }

}
