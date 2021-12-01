import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { ChatAppService } from '../services/chat-app.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  fullName = " ";
  email = " ";
  password = " ";
  dob: any;

  constructor(private router:Router, private storage: Storage, private chatAppService: ChatAppService) { }

  ngOnInit() {

  }

  // MARK: signedUp -> routes to main
  welcomeNavigate() {
    this.router.navigate(['welcome']);
  }

  // MARK: Update user's information, including: username, email, password, birthdate, avatar
  updatefullName(){
    this.chatAppService.updatefullName(this.fullName);
  }

  updateemail(){
    this.chatAppService.updateemail(this.email);
  }

  updatepassword(){
    this.chatAppService.updatepassword(this.password);
  }

  updatedob(){
    this.chatAppService.updatedob(this.dob);
  }

}
