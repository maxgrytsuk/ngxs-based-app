import { State, Action, StateContext } from '@ngxs/store';
import { patch, updateItem } from '@ngxs/store/operators';
import { tap } from 'rxjs/operators';
import { AppService } from '../../services/app.service';
import { GetItems, SetComment } from './favorite.action';
import { Provider } from 'src/app/services/provider.config';


export interface Favorite {
  id: number;
  name: string;
  provider: Provider;
  comment: string;
}
export interface FavoriteStateModel {
  items: Favorite[];
}

@State<FavoriteStateModel>({
  name: 'favorite',
  defaults: {
    items: []
  }
})
export class FavoriteState {
  constructor(private appService: AppService) { }

  @Action(GetItems)
  getItems(ctx: StateContext<FavoriteStateModel>) {
    return this.appService.getFavoriteItems().pipe(
      tap(items => ctx.patchState({ items }))
    );
  }

  @Action(SetComment)
  setComment(ctx: StateContext<FavoriteStateModel>, action: SetComment) {
    return this.appService.setComment(action.item, action.comment).pipe(
      tap(_ => ctx.setState(
        patch({
          items: updateItem<Favorite>(item => item.id === action.item.id,
            { ...action.item, comment: action.comment })
        })
      ))
    );
  }

}
