import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookediterComponent } from './bookediter/bookediter.component';
import { TableComponent } from './table/table.component';
import { DropListComponent } from './drop-list/drop-list.component';
// import { LoadingComponent } from './loading/loading.component';

const routes: Routes = [
  { path: '', redirectTo: '/table', pathMatch: 'full' },
  { path: 'bookediter', component: BookediterComponent },
  { path: 'bookediter/:id', component: BookediterComponent },
  { path: 'table', component: TableComponent },
  { path: 'drop', component: DropListComponent },
  {
    path: 'loading',
    loadChildren: () => import('./loading/loading.component').then(m => m.LoadingComponent)
  },
];

@NgModule({
  // declarations: [],
  imports: [
    // CommonModule
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
