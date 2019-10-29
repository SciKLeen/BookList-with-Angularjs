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
import { TableComponent } from './table/table.component';
import {MultiSelectModule} from 'primeng/multiselect';
import { DropListComponent } from './drop-list/drop-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BookediterComponent,
    TableComponent,
    DropListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    CheckboxModule,
    RatingModule,
    AppRoutingModule,
    MultiSelectModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
