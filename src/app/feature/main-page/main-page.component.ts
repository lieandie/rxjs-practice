import {Component, OnInit} from '@angular/core';
import {ItemDataService} from '../../core/item-data/item-data.service';
import {Observable} from 'rxjs';
import {ItemData} from '../../core/item-data/item-data';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  itemData$: Observable<ItemData[]>;

  constructor(private dataService: ItemDataService) {
  }

  ngOnInit() {
    this.itemData$ = this.dataService.getAllItemData(10);
  }

}
