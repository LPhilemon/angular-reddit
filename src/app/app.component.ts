import { Component } from '@angular/core';
import { Article } from './article/article.module';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  articles: Article[];

  val: number;
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
 title.value = '';
 link.value = '';

    return false;
  }

  constructor(){
    this.articles = [
      new Article('Angular', 'http://angular.io', 3),
new Article('Fullstack', 'http://fullstack.io', 2),
new Article('Angular Homepage', 'http://angular.io', 1),
    ]

    this.val = 1;
  }

  increase(){
    this.val = this.val+1;
    return false;
  }
  decrease(){
    this.val = this.val-1;
    return false;
  }
  sortedArticles(): Article[] {
     return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
     }
}
