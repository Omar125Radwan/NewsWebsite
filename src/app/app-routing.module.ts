import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: TopheadingComponent},
  {path: 'tech', component: TechNewsComponent},
  {path: 'business', component: BusinessnewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
