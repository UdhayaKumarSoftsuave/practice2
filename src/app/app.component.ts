import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentHeader !: string ;
  
  getHeader(value : string){
    this.currentHeader = value;
  }
}
