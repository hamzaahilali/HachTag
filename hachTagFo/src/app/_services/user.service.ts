import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_models/user';
import { map } from '../../../node_modules/rxjs/operators';
 
 
@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(private http: HttpClient) { }
 
    getAll() {
        return this.http.get<User[]>('/api/users');
    }

    register(user: User)
    {  

        return this.http.post<any>('api/register', user, 
                { headers: new HttpHeaders().set('Content-Type', 'application/json') })
            .pipe(map((res:any) => {
                console.log(res);
            },
            error => {
              console.log(error);
            }));
    }
}