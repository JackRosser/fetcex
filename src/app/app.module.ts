import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { ActivePostsComponent } from './components/main/active-posts/active-posts.component';
import { InactivePostsComponent } from './components/main/inactive-posts/inactive-posts.component';
import { PostDetailComponent } from './components/main/post-detail/post-detail.component';
import { HomeComponent } from './components/main/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    MainComponent,
    ActivePostsComponent,
    InactivePostsComponent,
    PostDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
