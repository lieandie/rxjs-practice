import {Component, Input, OnInit} from '@angular/core';
import {ItemData} from '../../../core/item-data/item-data';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  @Input() itemDataArray: ItemData[];

  constructor() {
  }

  ngOnInit() {
  }

}
