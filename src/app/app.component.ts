import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles : [' h1 {color:red;}'],
  // animations:[
  //   trigger('headerAnimation', [
  //     state('inactive', style({
  //       transform: 'scale(1)'
  //     })),
  //     state('active', style({
  //       transform: 'scale(1.5)'
  //     })),
  //     transition('active <=> inactive', animate('500ms ease-in-out'))      
  //   ])
  // ]
})
export class AppComponent {
  // lettersCount(CSSClass : string) : boolean {
  //   if(CSSClass === 'parfait')
  //   {
  //     return true;
  //   }  

  //   return false;  
  // }

  // buttonState = true;

  textAlign = 'center';
  background = '#c5f6fa';
  person = 'Anet';
  
  // headerState = 'inactive';

  // animateHeader() {
  //     this.headerState = (this.headerState === 'inactive' ? 'active' : 'inactive')
  //     this.buttonState = (this.buttonState ? false : true);
  // }
}
