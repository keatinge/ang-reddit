import {Component} from '@angular/core';
import {CachedService} from "../services/cached.service";


@Component({
    selector: 'cache',
    providers: [CachedService],
    template: `
    <h1>CACHE</h1>
    <table class="table table-bordered table-striped">
    
    
    <tr>
        <td>Title</td>
        <td>Comments</td>
        <td>Delete</td>
    </tr>
    
    <!-- WTF??? How the fuck does this work? Angular knows when my cache updates? wtf? -->
    <tr *ngFor="let post of cachedService.getCacheDir()">
        <td><a [routerLink]="['viewPost', cachedService.cleanLink(post.url)]">{{post.title}}</a> {{post.url}}</td>
        <td>{{post.numComments}}</td>
        <td><button (click)="cachedService.removeByUrl(post.url)" class="btn btn-danger">X</button></td>
    </tr>
    
    </table>
  `,

})
export class CacheComponent {
    constructor(private cachedService:CachedService) {

    }


}

