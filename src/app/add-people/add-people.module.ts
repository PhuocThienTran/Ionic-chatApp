import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPeoplePageRoutingModule } from './add-people-routing.module';

import { AddPeoplePage } from './add-people.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPeoplePageRoutingModule
  ],
  declarations: [AddPeoplePage]
})
export class AddPeoplePageModule {}
