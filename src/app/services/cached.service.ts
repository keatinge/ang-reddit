import {Injectable} from "@angular/core";
import {Http} from "@angular/http";


@Injectable()
export class CachedService {
    constructor(private http: Http) {
        console.log("CachedService Initialized");
    }

    getCacheDir() {
        console.log("Cache requested");
        let posts = JSON.parse(localStorage.getItem("cachedPosts")) || [];

        return posts.map((cachedPost:any) => {
            return {
                title : cachedPost.title,
                numComments : cachedPost.numComments,
                url : cachedPost.url,
            }
        });
    }

    setCache(obj:any) {
        console.log("SETTEING CAHCE");
        localStorage.setItem("cachedPosts", JSON.stringify(obj));
    }

    getCache() {
        return JSON.parse(localStorage.getItem("cachedPosts") || "[]");
    }

    appendCache(obj:any) {
        let curCache = this.getCache();

        let urls = curCache.map((it:any) => it.url);
        if (urls.indexOf(obj.url) !== -1) {
            console.log("Item is already in cache.. ignoring");
            return;
        }
        curCache.push(obj);
        this.setCache(curCache);
    }

    removeByUrl(url:string) {
        console.log("removing url from cache", url);
        this.setCache(this.getCache().filter((p:any) => p.url !== url));
    }

    cleanLink(url:string) {
        return url.replace("http://www.reddit.com/r/", "");
    }

    uncleanLink(url:string) {
        return "http://www.reddit.com/r/" + url;
    }

}



