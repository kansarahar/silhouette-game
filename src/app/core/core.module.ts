import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { MainComponent } from './components/main/main.component';
import { NavComponent } from './components/nav/nav.component';

import { MenubarModule } from 'primeng/menubar';


@NgModule({
  declarations: [
    MainComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MenubarModule,
  ],
  exports: [
    MainComponent,
    NavComponent,
  ]
})
export class CoreModule { }
