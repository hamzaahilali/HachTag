import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from '../../../node_modules/rxjs';
 
@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    private loggedIn = new BehaviorSubject<boolean>(false); // {1}

    constructor(private http: HttpClient) { }
    
    login(email: string, password: string) {
        return this.http.post<any>('/api/login', { email: email, password: password })
            .pipe(map((res:any) => {
                // login successful if there's a jwt token in the response
                if (res && res.data.token) {
                    // store email and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ email, token: res.data.token }));
                    this.loggedIn.next(true);
                }
            }));
    }

    get isLoggedIn() {
        return this.loggedIn.asObservable(); // {2}
    }
 
    logout() {
        this.loggedIn.next(false);
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}