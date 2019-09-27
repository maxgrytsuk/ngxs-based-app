import { State, Action, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { AppService } from '../../services/app.service';
import { Provider, Providers, ITEMS_COUNT, PROVIDER_FIELDS } from '../../services/provider.config';
import { GetItems, SetComment } from './favorite.action';

export interface FavoriteStateModel {
  items: any[];
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
    return this.appService.setComment(action.item, action.comment);
  }

}
