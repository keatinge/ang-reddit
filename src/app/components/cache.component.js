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
var cached_service_1 = require("../services/cached.service");
var CacheComponent = (function () {
    function CacheComponent(cachedService) {
        this.cachedService = cachedService;
    }
    CacheComponent = __decorate([
        core_1.Component({
            selector: 'cache',
            providers: [cached_service_1.CachedService],
            template: "\n    <h1>CACHE</h1>\n    <table class=\"table table-bordered table-striped\">\n    \n    \n    <tr>\n        <td>Title</td>\n        <td>Comments</td>\n        <td>Delete</td>\n    </tr>\n    \n    <!-- WTF??? How the fuck does this work? Angular knows when my cache updates? wtf? -->\n    <tr *ngFor=\"let post of cachedService.getCacheDir()\">\n        <td><a [routerLink]=\"['viewPost', cachedService.cleanLink(post.url)]\">{{post.title}}</a> {{post.url}}</td>\n        <td>{{post.numComments}}</td>\n        <td><button (click)=\"cachedService.removeByUrl(post.url)\" class=\"btn btn-danger\">X</button></td>\n    </tr>\n    \n    </table>\n  ",
        }), 
        __metadata('design:paramtypes', [cached_service_1.CachedService])
    ], CacheComponent);
    return CacheComponent;
}());
exports.CacheComponent = CacheComponent;
//# sourceMappingURL=cache.component.js.map