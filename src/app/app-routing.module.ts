import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { BookediterComponent } from './bookediter/bookediter.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
  { path: '', redirectTo: '/table', pathMatch: 'full' },
  { path: 'bookediter', component: BookediterComponent },
  { path: 'bookediter/:id', component: BookediterComponent },
  { path: 'table', component: TableComponent }
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
