import {RouterModule,Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import { HomeComponent } from './views/home/home.component';
import { ListComponent } from './views/list/list.component';
// import { ArticleComponent } from './article/article.component';
// import { ArticledetailComponent } from './articledetail/articledetail.component';

const appRoutes:Routes=[
  { path: 'home',component: HomeComponent},
  { path: 'list',component: ListComponent},
  // { path: 'article',component: ArticleComponent},
  // { path: 'articledetail/:id',component: ArticledetailComponent},
  { path: '',redirectTo:"/home",pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
