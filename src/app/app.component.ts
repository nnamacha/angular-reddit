import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles: Article[]; // <-- component property
  constructor() {
  this.articles = [
    new Article('Angular', 'http://angular.io', 3),
    new Article('Fullstack', 'http://fullstack.io', 2),
    new Article('Angular Homepage', 'http://angular.io', 1),
  ];
}
  addArticle(title:HTMLInputElement,Link:HTMLInputElement):boolean{
    
    console.log( `Adding article title:${title.value} and link:${Link.value}`)
    this.articles.push(new Article(title.value, Link.value, 0));
    title.value = '';
    Link.value = '';
    return false;
  }
  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}

