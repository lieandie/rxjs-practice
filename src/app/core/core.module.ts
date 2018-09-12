import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ItemDataService} from './item-data/item-data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ItemDataService]
})
export class CoreModule { }
