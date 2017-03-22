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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var PostsService = (function () {
    function PostsService(http) {
        this.http = http;
        console.log("PostsService Initialized");
    }
    PostsService.prototype.getTopPostsOnSub = function (subreddit) {
        return this.http.get("https://www.reddit.com/r/" + subreddit + "/.json")
            .map(function (res) { return res.json(); })
            .map(function (resJ) { return resJ["data"]["children"].map(function (p) {
            return {
                score: p.data.score,
                author: p.data.author,
                url: "http://www.reddit.com" + p.data.permalink,
                title: p.data.title,
                numComments: p.data.num_comments,
            };
        }); });
    };
    PostsService.prototype.getCommentsOnPost = function (url) {
        var fullUrl = url + ".json";
        console.log("REquesting", fullUrl);
        return this.http.get(fullUrl)
            .map(function (res) { return res.json(); })
            .map(function (resJ) {
            return getComments(resJ[1]);
        });
    };
    PostsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PostsService);
    return PostsService;
}());
exports.PostsService = PostsService;
function getComments(data) {
    var returnComments = data["data"]["children"]
        .filter(function (comment) { return comment.kind === "t1"; })
        .map(function (comment) {
        return {
            author: comment.data.author,
            id: comment.data.id,
            body: comment.data.body,
            score: comment.data.score,
            children: numChildren(comment) > 0 ? getComments(comment.data.replies) : []
        };
    });
    return returnComments;
}
function numChildren(comment) {
    return comment.data.replies.data ? comment.data.replies.data.children.length : 0;
}
//# sourceMappingURL=getposts.service.js.map