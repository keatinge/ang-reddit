import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";


import {PostsComponent} from "./components/posts.component";
import {ViewPostComponent} from "./components/viewpost.component";


const appRoutes: Routes = [
    {
        path : "",
        component: PostsComponent
    },
    {
        path : "viewPost/:url",
        component: ViewPostComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);