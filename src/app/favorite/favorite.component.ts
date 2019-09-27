import { Component, OnInit } from '@angular/core';
import { Store, Actions, ofActionCompleted } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetItems, SetComment } from './state/favorite.action';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  isFetching = false;
  // displayedColumns: string[] = ['name'];
  displayedColumns: string[] = ['provider', 'name', 'comment'];
  data: any[];

  items$: Observable<any[]>;


  constructor(private store: Store, private actions$: Actions) {
  }

  ngOnInit() {
    this.store.dispatch(new GetItems());
    this.items$ = this.store.select(state => state.favorite.items);
    this.items$.subscribe(data => this.data = data);
    this.actions$.pipe(ofActionCompleted(GetItems)).subscribe(() => this.isFetching = false);
  }

}
