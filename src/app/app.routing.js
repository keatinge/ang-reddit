"use strict";
var router_1 = require("@angular/router");
var posts_component_1 = require("./components/posts.component");
var viewpost_component_1 = require("./components/viewpost.component");
var appRoutes = [
    {
        path: "",
        component: posts_component_1.PostsComponent
    },
    {
        path: "viewPost/:url",
        component: viewpost_component_1.ViewPostComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map