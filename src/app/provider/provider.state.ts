import { State, Action, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { AppService } from '../app.service';
import { Provider, Providers, ITEMS_COUNT } from '../providers.config';

export class GetItems {
  static readonly type = '[Provider] GetItems';
}

export class SetProvider {
  static readonly type = '[Provider] SetProvider';
  constructor(public provider: Provider) { }
}

export interface ProviderStateModel {
  provider: Provider;
  items: any[];
}

@State<ProviderStateModel>({
  name: 'provider',
  defaults: {
    provider: 'countries',
    items: []
  }
})
export class ProviderState {
  constructor(private appService: AppService) { }

  @Action(SetProvider)
  setProvider(ctx: StateContext<ProviderStateModel>, action: SetProvider) {
    ctx.patchState({ provider: action.provider });
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

  private processItems(provider: Provider, items: any) {
    switch (provider) {
      case 'countries':
        return items.slice(0, ITEMS_COUNT);
      case 'wiki':
        return items.query.allimages;
      default:
        throw new Error('Unknown provider');
    }
  }
}
