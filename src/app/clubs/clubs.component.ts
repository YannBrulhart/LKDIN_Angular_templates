import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css'],  
  animations:[
    trigger('contactsAnimation', [
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
export class ClubsComponent implements OnInit {

  state='inactive';

  input = {
    'width': '360px',
    'background': '#fff',
    'box-shadow': '0 6px 10px 0 rgba(0, 0, 0, .1)',
    'border': '0',
    'outline': '0',
    'padding': '22px 18px'
  };

  companies = ['LinkedIn', 'Microsoft', 'Meggitt', 'Other'];

  model = [new Contact('Yann', 'Brulhart', 'yann@bubusissi.ch', 'male', this.companies[2])];

  constructor() { }

  ngOnInit(): void {  
  }
}
