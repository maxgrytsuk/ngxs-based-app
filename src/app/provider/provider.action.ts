import { Provider } from './providers.config';
import { Sort } from '@angular/material/sort';

export class GetItems {
  static readonly type = '[Provider] GetItems';
}

export class SetProvider {
  static readonly type = '[Provider] SetProvider';
  constructor(public provider: Provider) { }
}

export class SortItems {
  static readonly type = '[Provider] SortItems';
  constructor(public sort: Sort) { }
}
