import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { ItemComponent } from './item/item.component';
import { ItemListComponent } from './item-list/item-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainPageComponent, ItemComponent, ItemListComponent],
  exports: [MainPageComponent, ItemComponent, ItemListComponent]
})
export class ComponentModule { }
