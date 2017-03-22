import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { AppComponent }  from './components/app.component';
import { PostsComponent } from "./components/posts.component";
import { PostComponent } from "./components/post.component";
import { CacheComponent } from "./components/cache.component";
import { ViewPostComponent } from "./components/viewpost.component";
import { CommentComponent } from "./components/comment.component";

import { routing } from "./app.routing";


@NgModule({
  imports:      [ BrowserModule, HttpModule, routing],
  declarations: [ AppComponent, PostsComponent, PostComponent, CacheComponent, ViewPostComponent, CommentComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
