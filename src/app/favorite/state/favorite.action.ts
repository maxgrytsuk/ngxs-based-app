import { Favorite } from './favorite.state';

export class GetItems {
  static readonly type = '[Favorite] GetItems';
}

export class SetComment {
  static readonly type = '[Favorite] SetComment';
  constructor(public item: Favorite, public comment: string) { }
}

