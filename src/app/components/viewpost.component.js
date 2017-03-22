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
var router_1 = require('@angular/router');
var cached_service_1 = require("../services/cached.service");
var ViewPostComponent = (function () {
    function ViewPostComponent(route, cachedService) {
        this.route = route;
        this.cachedService = cachedService;
    }
    ViewPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var realUrl = _this.cachedService.uncleanLink(params["url"]);
            var fullObj = _this.cachedService.getCache().filter(function (c) { return c.url === realUrl; })[0];
            _this.title = fullObj["title"];
            _this.score = fullObj["score"];
            _this.author = fullObj["author"];
            _this.url = fullObj["url"];
            _this.comments = fullObj["comments"];
        });
    };
    ViewPostComponent = __decorate([
        core_1.Component({
            selector: 'viewpost',
            providers: [cached_service_1.CachedService],
            template: "\n    <h1>{{score}}pts {{title}} by {{author}}</h1>\n    \n    <comment *ngFor=\"let comment of comments\" [model]=\"comment\"></comment>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, cached_service_1.CachedService])
    ], ViewPostComponent);
    return ViewPostComponent;
}());
exports.ViewPostComponent = ViewPostComponent;
//# sourceMappingURL=viewpost.component.js.map