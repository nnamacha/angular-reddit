import { Component, OnInit,HostBinding,Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;
  @HostBinding('attr.class') cssClass = 'row';
 
  
  constructor() {

    
   }

   voteUp(): boolean {
    this.article.votes += 1;
    return false;
  }

  voteDown(): boolean {
    if(this.article.votes > 0) {
      this.article.votes -= 1;
      return false;
    } else {
      return false;
    }
  }

   

  ngOnInit() {
  }

}
