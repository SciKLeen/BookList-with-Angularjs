import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import {CheckboxModule} from 'primeng/checkbox';
import {RatingModule} from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BookediterComponent } from './bookediter/bookediter.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    BookediterComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    CheckboxModule,
    RatingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
