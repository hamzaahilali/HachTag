import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comment } from '../_models/comment';
import { map } from '../../../node_modules/rxjs/operators';
 
 
@Injectable({ providedIn: 'root' })
export class CommentService {

    constructor(private http: HttpClient) { }

    addComment(comment:Comment){
        
        return this.http.post<any>('/api/addComment', { text: comment.text,post:comment.post.id } ,
        { headers: new HttpHeaders().set('Content-Type', 'application/json') })
        .pipe(map((res:any) => {
            console.log(res);
        },
        error => {
          console.log(error);
        }));
    }
}