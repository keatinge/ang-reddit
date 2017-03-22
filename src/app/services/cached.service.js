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
var CachedService = (function () {
    function CachedService(http) {
        this.http = http;
        console.log("CachedService Initialized");
    }
    CachedService.prototype.getCacheDir = function () {
        console.log("Cache requested");
        var posts = JSON.parse(localStorage.getItem("cachedPosts")) || [];
        return posts.map(function (cachedPost) {
            return {
                title: cachedPost.title,
                numComments: cachedPost.numComments,
                url: cachedPost.url,
            };
        });
    };
    CachedService.prototype.setCache = function (obj) {
        console.log("SETTEING CAHCE");
        localStorage.setItem("cachedPosts", JSON.stringify(obj));
    };
    CachedService.prototype.getCache = function () {
        return JSON.parse(localStorage.getItem("cachedPosts") || "[]");
    };
    CachedService.prototype.appendCache = function (obj) {
        var curCache = this.getCache();
        var urls = curCache.map(function (it) { return it.url; });
        if (urls.indexOf(obj.url) !== -1) {
            console.log("Item is already in cache.. ignoring");
            return;
        }
        curCache.push(obj);
        this.setCache(curCache);
    };
    CachedService.prototype.removeByUrl = function (url) {
        console.log("removing url from cache", url);
        this.setCache(this.getCache().filter(function (p) { return p.url !== url; }));
    };
    CachedService.prototype.cleanLink = function (url) {
        return url.replace("http://www.reddit.com/r/", "");
    };
    CachedService.prototype.uncleanLink = function (url) {
        return "http://www.reddit.com/r/" + url;
    };
    CachedService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CachedService);
    return CachedService;
}());
exports.CachedService = CachedService;
//# sourceMappingURL=cached.service.js.map