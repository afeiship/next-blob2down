import { Component, OnInit,Input } from '@angular/core';
import {Blog} from '../data/blog';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  constructor() { }
  @Input() blog:Blog;
  ngOnInit() {
  }

}
