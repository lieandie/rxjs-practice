import {Injectable} from '@angular/core';
import {ItemData} from './item-data';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemDataService {

  constructor() {
  }

  public getAllItemData(size: number): Observable<ItemData[]> {
    const result: ItemData[] = [];
    for (let i = 0; i < size; i++) {
      result.push(new ItemData());
    }
    return of(result);
  }
}
