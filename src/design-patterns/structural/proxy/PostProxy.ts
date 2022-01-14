import { IPostsService } from "./IPostsService";
import { Post } from "./TPost";

export class PostProxy implements IPostsService {
    private postService: IPostsService;

    constructor(postService: IPostsService) {
        this.postService = postService;
    }

    listPosts(): Post[] {
        // You can check authorization of user here.
        return this.postService.listPosts();
    }
    getPostInfo(id: string): Post | undefined {
        return this.postService.getPostInfo(id);
    }
    downloadPost(id: string): string {
        return this.downloadPost(id);
    }
}
