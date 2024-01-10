import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone:true,
  imports:[FormsModule]
})
export class HeaderComponent {
  title:string = 'Hello World';

   changeTitleHandler(){
     this.title = 'Hi Deloitte';
   }
}
