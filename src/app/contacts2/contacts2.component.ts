import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-contacts2',
  templateUrl: './contacts2.component.html',
  styleUrls: ['./contacts2.component.css'],  
  animations:[
    trigger('contacts2Animation', [
      state('active', style({
        opacity: '1'
      })),
      transition('void => *',[
        style({transform: 'translateY(-500px)', opacity:'0'}),
        animate('1000ms ease-in-out')
      ])
    ])
  ]
})
export class Contacts2Component implements OnInit {

  state='inactive';
 
  companies = ['LinkedIn', 'Microsoft', 'Meggitt', 'Other']; 
  public contacts : any;

  model1 = new Contact('', '', '', '', '');
  models = [new Contact('Yann', 'Brulhart', 'yann@bubusissi.ch', 'male', this.companies[2])];

  reactForm!: FormGroup;

  constructor(private fb : FormBuilder,
              private contactService : ContactService) { 
    this.createForm();
  }

  ngOnInit() { 
    this.getContacts();
  }
  createForm() {
    this.reactForm = this.fb.group({
       first_name: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
       last_name: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
       email: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
       gender: ['', Validators.required],
       company: ''
    });
  }

  getContacts(){
    this.contactService
    .getContacts()
    .subscribe({ next: (data) => {this.contacts = data},
                 error: (err) => console.error(err)});
  }  

  onSubmit(): void {
      let contactForm = this.reactForm.value;

      const contact: Contact = {
        first_name : contactForm.first_name,
        last_name : contactForm.last_name,
        gender: contactForm.gender,
        email: contactForm.email,
        company: contactForm.company
      }

      this.contactService
          .addContacts(contact)
          .subscribe({
             next: () => {
                           this.getContacts();
                           return true;
                         },
             error: err => {
               console.error("Error saving contact : " + err);
               return throwError(() => err);
             }
            }
          );
      
        this.rebuildForm();

      // this.models.unshift(
      //   new Contact(
      //     value.first_name,
      //     value.last_name,
      //     value.gender,
      //     value.email,
      //     value.company,
      //   ));
    }
    
    rebuildForm() {
      this.reactForm.reset({
        first_name : '',
        last_name : '',
        gender: '',
        email: '',
        company: ''
      })
    }

    // reactForm = new FormBuilder({
  //   first_name: new FormControl(),
  //   last_name: new FormControl(),
  //   gender: new FormControl(),
  //   email: new FormControl(),
  //   company: new FormControl(),
  // })

  // reactForm = new FormGroup({
  //     first_name: new FormControl(),
  //     last_name: new FormControl(),
  //     gender: new FormControl(),
  //     email: new FormControl(),
  //     company: new FormControl(),
  //   })
}