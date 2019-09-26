import { Component, OnInit } from '@angular/core';
import { Store, Actions, ofActionCompleted } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Provider, PROVIDER_FIELDS } from './provider.config';
import { SetProvider, SortItems } from './provider.action';

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

  isFetching = false;
  items$: Observable<any[]>;
  provider$: Observable<Provider>;

  displayedColumns: string[] = ['select'];
  data: any[];
  selection = new SelectionModel(true, []);

  constructor(private store: Store, private actions$: Actions) {
  }

  ngOnInit() {
    this.items$ = this.store.select(state => state.provider.items);
    this.provider$ = this.store.select(state => state.provider.provider);
    this.items$.subscribe(data => this.data = data);
    this.provider$.subscribe(provider => {
      this.displayedColumns = provider ?
        this.displayedColumns.concat(PROVIDER_FIELDS[provider]) :
        this.displayedColumns;
    });
    this.actions$.pipe(ofActionCompleted(SetProvider)).subscribe(() => this.isFetching = false);
  }

  setProvider(event) {
    this.isFetching = true;
    this.clean();
    this.store.dispatch(new SetProvider(event.value));
  }

  clean() {
    this.selection.clear();
    this.displayedColumns = ['select'];
  }

  sortData(sort: Sort) {
    this.store.dispatch(new SortItems(sort));
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.data.forEach(row => this.selection.select(row));
  }

}
