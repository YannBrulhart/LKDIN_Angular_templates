import { Component } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations:[
    trigger('headerAnimation', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active', style({
        transform: 'scale(1.5)'
      })),
      transition('active <=> inactive', animate('500ms ease-in-out'))      
    ])
  ]
})

export class HeaderComponent {
  textAlign = 'center';
  
  header = 'CH1';
  titre = 'Gestion des relations clients';

  buttonState = true;
  headerState = 'inactive';

  animateHeader() {
      this.headerState = (this.headerState === 'inactive' ? 'active' : 'inactive')
      this.buttonState = (this.buttonState ? false : true);
  }
}
