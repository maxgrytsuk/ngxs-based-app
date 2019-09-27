import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store, Actions, ofActionCompleted } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetItems, SetComment } from './state/favorite.action';
import { CommentDialogComponent } from './comment/comment.dialog';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  isFetching = false;
  displayedColumns: string[] = ['provider', 'name', 'comment', 'add'];
  data: any[];

  items$: Observable<any[]>;


  constructor(public dialog: MatDialog, private store: Store, private actions$: Actions) {
  }

  ngOnInit() {
    this.store.dispatch(new GetItems());
    this.items$ = this.store.select(state => state.favorite.items);
    this.items$.subscribe(data => this.data = data);
    this.actions$.pipe(ofActionCompleted(GetItems))
      .subscribe(() => this.isFetching = false);
  }

  openDialog(item): void {
    const dialogRef = this.dialog.open(CommentDialogComponent, {
      width: '250px',
      data: { comment: item.comment }
    });

    dialogRef.afterClosed().subscribe(comment => {
      this.store.dispatch(new SetComment(item, comment));
    });
  }

}
