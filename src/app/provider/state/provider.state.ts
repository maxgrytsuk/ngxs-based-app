import { State, Action, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { AppService } from '../../services/app.service';
import { Provider, Providers, ITEMS_COUNT, PROVIDER_FIELDS } from '../../services/provider.config';
import { SetProvider, GetItems, SortItems, SetIsFavorite } from './provider.action';

export interface ProviderStateModel {
  provider: Provider;
  items: any[];
}

@State<ProviderStateModel>({
  name: 'provider',
  defaults: {
    provider: undefined,
    items: []
  }
})
export class ProviderState {
  constructor(private appService: AppService) { }

  @Action(SetProvider)
  setProvider(ctx: StateContext<ProviderStateModel>, action: SetProvider) {
    ctx.patchState({ provider: action.provider, items: [] });
    return ctx.dispatch(new GetItems());
  }

  @Action(GetItems)
  getItems(ctx: StateContext<ProviderStateModel>) {
    const state = ctx.getState();
    const provider = state.provider;
    return this.appService.getItems(Providers[provider]).pipe(
      tap(items => {
        items = this.processItems(provider, items);
        ctx.patchState({ items });
      }));
  }

  @Action(SetIsFavorite)
  setIsFavorite(ctx: StateContext<ProviderStateModel>, action: SetIsFavorite) {
    const state = ctx.getState();
    return this.appService.setIsFavorite(action.data, state.provider, action.isFavorite);
  }

  @Action(SortItems)
  sortItems(ctx: StateContext<ProviderStateModel>, action: SortItems) {
    const state = ctx.getState();
    let items = state.items.slice();
    items = items.sort((a, b) => {
      const isAsc = action.sort.direction === 'asc';
      switch (action.sort.active) {
        case 'name': return this.compare(a.name, b.name, isAsc);
        case 'region': return this.compare(a.region, b.region, isAsc);
        case 'capital': return this.compare(a.capital, b.capital, isAsc);
        case 'population': return this.compare(a.population, b.population, isAsc);
        case 'title': return this.compare(a.title, b.title, isAsc);
        case 'url': return this.compare(a.url, b.url, isAsc);
        default: return 0;
      }
    });
    ctx.patchState({ items });
  }

  private compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  private processItems(provider: Provider, items: any) {
    let data;
    switch (provider) {
      case 'countries':
        data = items.slice(0, ITEMS_COUNT);
        break;
      case 'wiki':
        data = items.query.allimages;
        break;
      default:
        throw new Error('Unknown provider');
    }
    return data.map(item => {
      return PROVIDER_FIELDS[provider].reduce((acc, field) => {
        acc[field] = item[field];
        return acc;
      }, {});
    });
  }

}
