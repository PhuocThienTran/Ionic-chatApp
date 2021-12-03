import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import { ChatAppService } from '../services/chat-app.service'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  users = []

  constructor(private router:Router, private chatAppService: ChatAppService) { }

  async ngOnInit() {
    this.users = JSON.parse( await this.chatAppService.retrieveUsers());
  }

  myFriendsNavigate(){
    this.router.navigate(['friends']);
  }

  conversationNavigate(){
    this.router.navigate(['conversation']);
  }

}
