import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadingComponent } from './loading.component';

const loadingRoute: Routes = [{ path: '', component: LoadingComponent }];

@NgModule({
  imports: [RouterModule.forChild(loadingRoute)],
  exports: [RouterModule]
})
export class LoadingRoutingModule { }
