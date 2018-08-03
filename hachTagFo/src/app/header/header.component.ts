import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { Observable } from '../../../node_modules/rxjs';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;   

  constructor(private router: Router,private authenticationService:AuthenticationService) { }

  ngOnInit() {
    console.log(this.authenticationService.isLoggedIn);
    this.isLoggedIn$ = this.authenticationService.isLoggedIn;
  }

  onLogout(){
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
