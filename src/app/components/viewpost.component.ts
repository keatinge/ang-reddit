import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CachedService } from "../services/cached.service";


@Component({
    selector: 'viewpost',
    providers : [CachedService],
    template : `
    <h1>{{score}}pts {{title}} by {{author}}</h1>
    
    <comment *ngFor="let comment of comments" [model]="comment"></comment>
  `
})
export class ViewPostComponent  {
    key:any;
    title:string;
    score:number;
    author:string;
    url:string;
    comments:any;




    constructor(private route: ActivatedRoute, private cachedService: CachedService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let realUrl = this.cachedService.uncleanLink(params["url"]);
            let fullObj = this.cachedService.getCache().filter((c:any) => c.url === realUrl)[0];
            this.title = fullObj["title"];
            this.score = fullObj["score"];
            this.author = fullObj["author"];
            this.url = fullObj["url"];
            this.comments = fullObj["comments"];
        });
    }
}

