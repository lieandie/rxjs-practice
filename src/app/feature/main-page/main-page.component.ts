import { Component, OnInit } from '@angular/core';
import {ItemDataService} from '../../core/item-data/item-data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private dataService: ItemDataService) { }

  ngOnInit() {
  }

}
