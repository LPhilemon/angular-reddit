import { Component, HostBinding, Input } from '@angular/core';
import { Article } from './article.module';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  @HostBinding('attr.class') cssClass = 'flex-row';
  @Input() article: Article;


 constructor() {
  this.article = new Article('Angular',
 'http://angular.io',
 10);
 }

 voteUp(): boolean{
  this.article.votes += 1;
  return false;
  }
 
 voteDown(): boolean {
   this.article.votes -= 1;
   return false;
   }
   
}