import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addArticle(title:HTMLInputElement,Link:HTMLInputElement):boolean{
    
    console.log( `Adding article title:${title.value} and link:${Link.value}`)
    return false;
  }
}

