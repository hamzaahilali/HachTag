import { Post } from "./post";

export class Comment {
    id: number;
    text: string;
    created_at: Date;
    post: Post;
}