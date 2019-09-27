import { Provider } from '../../services/provider.config';
import { Sort } from '@angular/material/sort';

export class GetItems {
  static readonly type = '[Provider] GetItems';
}

export class SetProvider {
  static readonly type = '[Provider] SetProvider';
  constructor(public provider: Provider) { }
}


export class SetIsFavorite {
  static readonly type = '[Provider] SetIsFavorite';
  constructor(public data: any, public isFavorite: boolean) { }
}

export class SortItems {
  static readonly type = '[Provider] SortItems';
  constructor(public sort: Sort) { }
}
