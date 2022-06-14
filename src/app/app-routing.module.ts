import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './Admin/adduser/adduser.component';
import { BlogadminComponent } from '../app/Admin/blogadmin/blogadmin.component';
import { UserComponent } from './Admin/user/user.component';
import { BlogComponent } from './compoden/blog/blog.component';
import { HomeComponent } from './compoden/home/home.component';
import { WordComponent } from './compoden/word/word.component';
import { AddBlogComponent } from '../app/Admin/add-blog/add-blog.component';
import { ProjeactComponent } from './Admin/projeact/projeact.component';
import { HomePageComponent } from './compoden/home-page/home-page.component';

const routes: Routes = [
  {path: '', component:HomePageComponent,children:[
    {path: "", component: HomeComponent},
    {path: "blog", component: BlogComponent},
    {path: "word", component: WordComponent},
  ]},
  
  { path: "admin", children:[
    {path: "", component: UserComponent},
    {path: "user", children:[
    {path: "", component: UserComponent},
    {path: "edit/:id", component: AdduserComponent},
    {path: "add", component: AdduserComponent},
    {path: ":id", component:HomeComponent }
      ]},
      {path: "blockadmin", children:[
        {path: "", component: BlogadminComponent},
        {path: "edit/:id", component: AddBlogComponent},
        {path: "add", component: AddBlogComponent},
        {path: ":id", component:AddBlogComponent }
          ]},
          {path: "project", children:[
            {path: "", component: ProjeactComponent},
            {path: "edit/:id", component: AddBlogComponent},
            {path: "add", component: AddBlogComponent},
            {path: ":id", component:AddBlogComponent }
              ]}] },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
