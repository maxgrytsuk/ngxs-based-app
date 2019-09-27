import { InMemoryDbService } from 'angular-in-memory-web-api';


export class DataService implements InMemoryDbService {
  createDb() {
    return {favorites: []};
  }

  genId(favorites: any[]): number {
    return favorites.length > 0 ? Math.max(...favorites.map(item => item.id)) + 1 : 0;
  }
}
