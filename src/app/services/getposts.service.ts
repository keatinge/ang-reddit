import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";


@Injectable()
export class PostsService {
    constructor(private http: Http) {
        console.log("PostsService Initialized");
    }

    getTopPostsOnSub(subreddit:string) {
        return this.http.get(`https://www.reddit.com/r/${subreddit}/.json`)
            .map(res => res.json())
            .map(resJ => resJ["data"]["children"].map((p:any) => {
                return {
                    score : p.data.score,
                    author : p.data.author,
                    url : `http://www.reddit.com${p.data.permalink}`,
                    title : p.data.title,
                    numComments : p.data.num_comments,
                };

            }));
    }

    getCommentsOnPost(url:string) {
        let fullUrl = `${url}.json`;
        console.log("REquesting", fullUrl);
        return this.http.get(fullUrl)
            .map(res => res.json())
            .map(resJ => {
                return getComments(resJ[1]);
            });
    }
}


function getComments(data:any) {
    let returnComments = data["data"]["children"]
        .filter((comment:any) => comment.kind === "t1")
        .map((comment:any) => {
            return {
                author: comment.data.author,
                id: comment.data.id,
                body : comment.data.body,
                score: comment.data.score, //maybe should be > 1, i think end result is same. bcuz `kind: "more"`
                children : numChildren(comment) > 0 ? getComments(comment.data.replies) : []
            }
        });
    return returnComments;

}

function numChildren(comment:any) {
    return comment.data.replies.data ? comment.data.replies.data.children.length : 0;
}
