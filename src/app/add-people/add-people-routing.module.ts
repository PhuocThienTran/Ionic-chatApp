import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPeoplePage } from './add-people.page';

const routes: Routes = [
  {
    path: '',
    component: AddPeoplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPeoplePageRoutingModule {}
