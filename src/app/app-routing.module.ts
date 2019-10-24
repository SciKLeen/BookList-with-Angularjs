import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { BookediterComponent } from './bookediter/bookediter.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  { path: '',redirectTo:'/view' ,pathMatch:'full' },
  { path: 'bookediter', component: BookediterComponent },
  { path: 'bookediter/:id', component: BookediterComponent },
  { path: 'view', component: ViewComponent }
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
