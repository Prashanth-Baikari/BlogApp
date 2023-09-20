import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { HeaderComponent } from './header/header.component';
import { ViewblogsComponent } from './viewblogs/viewblogs.component';
import { ViewmyblogsComponent } from './viewmyblogs/viewmyblogs.component';
import { PostcommentComponent } from './postcomment/postcomment.component';
import { ViewCommentComponent } from './view-comment/view-comment.component';

const routes: Routes = [
  {path:'Home', component:HeaderComponent},
  {path:'', redirectTo:'Home', pathMatch:'full'},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'createblog',component:CreateBlogComponent},
  {path:'viewmyblogs', component:ViewmyblogsComponent},
  {path:'viewallblogs', component:ViewblogsComponent},
  {path:'posts', component:ViewblogsComponent},
  {path:'postcomment/:id',component:PostcommentComponent},
  {path:'viewcomments/:id', component:ViewCommentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
