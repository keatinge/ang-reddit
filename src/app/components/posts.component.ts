import { Component } from '@angular/core';
import { PostsService } from "../services/getposts.service";
import { CacheComponent } from "../components/cache.component";

@Component({
    selector: 'posts',
    providers : [PostsService],
    template : `




<cache></cache>
<h1 style="text-align:center">Found {{allPosts.length}} posts on /r/{{subreddit}}</h1>


<div style="text-align:center">
    <div style="display:inline-block">
        <input type="text" class="form-control" style="width:600px;display:inline-block" #newSub>
        <button class="btn btn-primary" (click)="loadPosts(newSub.value)">Change subreddit</button>
    </div>
</div>



<div class="row">
    

    <post *ngFor="let post of allPosts" [model]="post"></post>
</div>

  `,

})
export class PostsComponent  {
    allPosts:any;
    subreddit: string;
    test:any;

    constructor(private postsService:PostsService) {
        this.subreddit = "askreddit";
        this.allPosts = [];
        this.test = {"title" : "hello"};

        this.loadPosts("askreddit");
    }

    loadPosts(subreddit:string) {

        console.log("Loading for ", subreddit);
        this.postsService.getTopPostsOnSub(subreddit).subscribe(posts => {
            this.allPosts = posts;
        });
    }

}
