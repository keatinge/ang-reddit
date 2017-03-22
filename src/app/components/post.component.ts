import { Component, Input } from '@angular/core';
import { PostsService } from "../services/getposts.service";
import { CachedService } from "../services/cached.service";

@Component({
    selector: 'post',
    providers : [PostsService, CachedService],
    template : `

    <div class="row post">
        <div class="col-md-10">
            <img style="width:20px;height:20px" src="https://img.4plebs.org/boards/s4s/image/1385/00/1385006781269.png"/>
            <h4 style="display:inline">{{model.score}} <span style="margin-left:10px"> {{model.title}}</span></h4>

            <p>{{model.numComments}} comments</p>
            
        </div>
        <div class="col-md-2">
            <button (click)="addToCache()" class="btn btn-info">Add to cache</button>
        </div>
    </div>
  `,

})
export class PostComponent  {
    @Input() model: any;

    constructor (private postsService:PostsService, private cachedService:CachedService) {

    }

    //This should maybe be done through a service? Whatever...
    addToCache() {
        console.log("adding to cache:", this.model.url);
        this.postsService.getCommentsOnPost(this.model.url).subscribe(comments => {

            let fullObj = Object.assign({}, this.model, {comments});
            this.cachedService.appendCache(fullObj);
        });
    }

}

