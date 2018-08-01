import { User } from "./user";

export class Post {
    id: number;
    text: string;
    created_at: Date;
    user: User;
    comments: Comment [];
}