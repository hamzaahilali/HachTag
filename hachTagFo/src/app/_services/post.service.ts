import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../_models/post';
import { map } from '../../../node_modules/rxjs/operators';
 
 
@Injectable({ providedIn: 'root' })
export class PostService {

    constructor(private http: HttpClient) { }
 
    getAll() {
        return this.http.get<Post[]>('/api/posts');
    }

    addPost(post:Post){

        let currentUser = JSON.parse(localStorage.getItem('currentUser'));

        console.log(currentUser.email);

        return this.http.post<any>('/api/addPost', { text: post.text,user:currentUser.email } ,
        { headers: new HttpHeaders().set('Content-Type', 'application/json') })
        .pipe(map((res:any) => {
            console.log(res);
        },
        error => {
          console.log(error);
        }));
    }
}