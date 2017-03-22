"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var getposts_service_1 = require("../services/getposts.service");
var PostsComponent = (function () {
    function PostsComponent(postsService) {
        this.postsService = postsService;
        this.subreddit = "askreddit";
        this.allPosts = [];
        this.test = { "title": "hello" };
        this.loadPosts("askreddit");
    }
    PostsComponent.prototype.loadPosts = function (subreddit) {
        var _this = this;
        console.log("Loading for ", subreddit);
        this.postsService.getTopPostsOnSub(subreddit).subscribe(function (posts) {
            _this.allPosts = posts;
        });
    };
    PostsComponent = __decorate([
        core_1.Component({
            selector: 'posts',
            providers: [getposts_service_1.PostsService],
            template: "\n\n\n\n\n<cache></cache>\n<h1 style=\"text-align:center\">Found {{allPosts.length}} posts on /r/{{subreddit}}</h1>\n\n\n<div style=\"text-align:center\">\n    <div style=\"display:inline-block\">\n        <input type=\"text\" class=\"form-control\" style=\"width:600px;display:inline-block\" #newSub>\n        <button class=\"btn btn-primary\" (click)=\"loadPosts(newSub.value)\">Change subreddit</button>\n    </div>\n</div>\n\n\n\n<div class=\"row\">\n    \n\n    <post *ngFor=\"let post of allPosts\" [model]=\"post\"></post>\n</div>\n\n  ",
        }), 
        __metadata('design:paramtypes', [getposts_service_1.PostsService])
    ], PostsComponent);
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=posts.component.js.map