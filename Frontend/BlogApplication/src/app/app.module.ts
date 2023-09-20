import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { ViewblogsComponent } from './viewblogs/viewblogs.component';
import { ViewmyblogsComponent } from './viewmyblogs/viewmyblogs.component';
import { PostcommentComponent } from './postcomment/postcomment.component';
import { ViewCommentComponent } from './view-comment/view-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    CreateBlogComponent,
    ViewblogsComponent,
    ViewmyblogsComponent,
    PostcommentComponent,
    ViewCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
