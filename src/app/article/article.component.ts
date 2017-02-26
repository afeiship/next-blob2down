import { Component, OnInit } from '@angular/core';
import {BLOGS,Blog} from '../data/blog';
import {BlogService} from '../data/blog.servies';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  blogList:Blog[];
  selectedBlog:Blog;

  constructor(private bService:BlogService) {
    this.blogList=bService.getBlogs();
  }

  ngOnInit() {
  }

  select(id:number){
    this.selectedBlog=this.bService.getSelectedBlog(id);
  }

}
