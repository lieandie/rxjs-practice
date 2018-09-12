import {Component, Input, OnInit} from '@angular/core';
import {ItemData} from '../../../core/item-data/item-data';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() itemData: ItemData;
  constructor() { }

  ngOnInit() {
  }

}
