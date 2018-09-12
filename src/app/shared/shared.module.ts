import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentModule} from './component/component.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentModule,
  ],
  declarations: [],
  exports: [ComponentModule]
})
export class SharedModule {
}
