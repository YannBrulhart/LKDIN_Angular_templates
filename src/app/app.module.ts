import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HeaderComponent } from './header/header.component';
import { ClubsComponent } from './clubs/clubs.component';
import { MaterializeModule } from 'angular2-materialize';
import { Contacts2Component } from './contacts2/contacts2.component';
import { ContactService } from './contact.service';

const routes: Routes = [
  {  path:'contacts',  component: ContactsComponent },
  {  path:'clubs',  component: ClubsComponent },
  {  path:'home',  component: ContactsComponent },
  {  path:'react-contacts',  component: Contacts2Component }]

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HeaderComponent,
    ClubsComponent,
    Contacts2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FormsModule,
    MaterializeModule,
    ReactiveFormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
