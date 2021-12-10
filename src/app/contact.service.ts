import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Contact2, contacts} from './contact2';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getContacts(): Observable<Contact2[]>{
    return of(contacts).pipe();
  }

  addContacts(contact: Contact2){
    const newContacts = contacts.unshift(contact);
    return of(newContacts).pipe();
  }
}
