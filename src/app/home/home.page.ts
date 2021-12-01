import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router) {}
  

  loginNavigate(){
    this.router.navigate(['welcome']);
  }

  signUpNavigate(){
    this.router.navigateByUrl("sign-up")
  }
}
