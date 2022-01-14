import { IPostsService } from "./IPostsService";
import { Post } from "./TPost";

export class PostsService implements IPostsService {
    private posts: Post[];

    constructor() {
        this.posts = [
            { id: "1", title: "My blog post 1" },
            { id: "2", title: "My blog post 2" },
        ];
    }

    listPosts(): Post[] {
        return this.posts;
    }

    getPostInfo(id: string): Post | undefined {
        return this.posts.find((post) => post.id === id);
    }

    downloadPost(id: string): string {
        if (this.posts.find((post) => post.id === id)) {
            return "Post downloaded";
        }

        return "Post not found";
    }
}
