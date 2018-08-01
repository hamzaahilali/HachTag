import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { first } from '../../../node_modules/rxjs/operators';
import { PostService } from '../_services/post.service';
import { Post } from '../_models/post';
import { CommentService } from '../_services/comment.service';
import { Comment } from '../_models/comment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: User[] = [];
  posts: Post[] = [];
  loading = false;
  postTxt: string;
  error:string;

  comment: Comment[] = [];

  constructor(private userService: UserService,
              private postService:PostService,
              private commentService: CommentService) { }

  ngOnInit() {
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
    });

    this.postService.getAll().pipe(first()).subscribe(posts => {
      this.posts = posts;
    });
  }

  addComment(postp: Post,commentp:string)
  {
    this.loading = true;

    console.log(postp);

    console.log(commentp);


    let comment:Comment = <Comment>{
      text: commentp,
      post: postp
    };

    this.commentService.addComment(comment).pipe(first())
    .subscribe(
      data => {
        this.loading = false;
        this.comment = [];
        this.updateListPost();
      },
      error => {
        this.error = error;
        this.loading = false;
      });

  }

  addPost(postTxt:string)
  {
    this.loading = true;
    let post:Post = <Post>{
      text: postTxt,
    };

    this.postService.addPost(post).pipe(first())
    .subscribe(
      data=>{
        this.loading = false;
        this.postTxt = "";
        this.updateListPost();
      },
      error => {
        this.error = error;
        this.loading = false;
      }
    );

  }

  updateListPost()
  {
    this.postService.getAll().pipe(first()).subscribe(posts => {
      this.posts = posts;
    });
  }
  



}
