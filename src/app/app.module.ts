import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './compoden/home/home.component';
import { WordComponent } from './compoden/word/word.component';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { BlogComponent } from './compoden/blog/blog.component';
import { UserComponent } from './Admin/user/user.component';
import { AdduserComponent } from './Admin/adduser/adduser.component';
import { BlogadminComponent } from './Admin/blogadmin/blogadmin.component';
import { AddBlogComponent } from '../app/Admin/add-blog/add-blog.component';
import { ProjeactComponent } from '../app/Admin/projeact/projeact.component';
import { AddprojeactComponent } from '../app/Admin/addprojeact/addprojeact.component';
import { HeaderComponent } from './compoden/header/header.component';
import { HomePageComponent } from './compoden/home-page/home-page.component';
import { AdminlayoutComponent } from './admin/adminlayout/adminlayout.component';
import { NavAdminComponent } from './admin/nav-admin/nav-admin.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WordComponent,
    BlogComponent,
    UserComponent,
    AdduserComponent,
    BlogadminComponent,
    AddBlogComponent,
    ProjeactComponent,
    AddprojeactComponent,
    HeaderComponent,
    HomePageComponent,
    AdminlayoutComponent,
    NavAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
