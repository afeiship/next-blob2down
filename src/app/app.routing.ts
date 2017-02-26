import {RouterModule,Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

const routes:Routes=[
  { path: 'home',component: AppComponent},
  { path: 'article',component: ArticleComponent},
  { path: 'article-detail/:id',component: ArticleDetailComponent},
  { path: '',redirectTo:"/home",pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
