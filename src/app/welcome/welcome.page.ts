import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { ChatAppService } from '../services/chat-app.service'


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  fullName: string;

  constructor(private router:Router, private storage: Storage, private chatAppService: ChatAppService) { }

  async ngOnInit() {
    this.storage.get("fullName").then(val => {this.fullName = val})

  }

  logoutNavigate(){
    this.router.navigate(['home']);
  }

  myFriendsNavigate(){
    this.router.navigate(['friends']);
  }

  conversationNavigate(){
    this.router.navigate(['conversation']);
  }

}
