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
var cached_service_1 = require("../services/cached.service");
var PostComponent = (function () {
    function PostComponent(postsService, cachedService) {
        this.postsService = postsService;
        this.cachedService = cachedService;
    }
    //This should maybe be done through a service? Whatever...
    PostComponent.prototype.addToCache = function () {
        var _this = this;
        console.log("adding to cache:", this.model.url);
        this.postsService.getCommentsOnPost(this.model.url).subscribe(function (comments) {
            var fullObj = Object.assign({}, _this.model, { comments: comments });
            _this.cachedService.appendCache(fullObj);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PostComponent.prototype, "model", void 0);
    PostComponent = __decorate([
        core_1.Component({
            selector: 'post',
            providers: [getposts_service_1.PostsService, cached_service_1.CachedService],
            template: "\n\n    <div class=\"row post\">\n        <div class=\"col-md-10\">\n            <img style=\"width:20px;height:20px\" src=\"https://img.4plebs.org/boards/s4s/image/1385/00/1385006781269.png\"/>\n            <h4 style=\"display:inline\">{{model.score}} <span style=\"margin-left:10px\"> {{model.title}}</span></h4>\n\n            <p>{{model.numComments}} comments</p>\n            \n        </div>\n        <div class=\"col-md-2\">\n            <button (click)=\"addToCache()\" class=\"btn btn-info\">Add to cache</button>\n        </div>\n    </div>\n  ",
        }), 
        __metadata('design:paramtypes', [getposts_service_1.PostsService, cached_service_1.CachedService])
    ], PostComponent);
    return PostComponent;
}());
exports.PostComponent = PostComponent;
//# sourceMappingURL=post.component.js.map