import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './components/user-card/user-card.component';

import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [
    UserCardComponent,
  ],
  imports: [
    CommonModule,
    AvatarModule,
    ButtonModule,
    CardModule,
  ],
  exports: [
    UserCardComponent,
  ]
})
export class SharedModule { }
