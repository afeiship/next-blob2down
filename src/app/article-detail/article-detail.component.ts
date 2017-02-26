import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }     from '@angular/common';
import { Blog } from '../data/blog';
import 'rxjs/add/operator/switchMap';
import { BlogService } from '../data/blog.servies';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  @Input() blog: Blog;

  constructor(
    private bService: BlogService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.bService = bService;
    this.route = route;
    this.location = location;
  }

  ngOnInit() {
    console.log(this);
    let id = this.route.params
      .switchMap((params: Params) => params['id'])
      .subscribe(x => this.blog = this.bService.getSelectedBlog(+x))
  }

  back() {
    // console.log(this);
    this.location.back();
  }

}
