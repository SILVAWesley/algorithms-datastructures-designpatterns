import { Post } from "./TPost";

export interface IPostsService {
    listPosts(): Post[];
    getPostInfo(id: string): Post | undefined;
    downloadPost(id: string): string;
}
