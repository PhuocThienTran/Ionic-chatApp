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
  conversations = []

  latestMessage: any;
  latestValues = []
  latestKeys = []

  constructor(private router:Router, private chatAppService: ChatAppService) { }

  async ngOnInit() {
    this.users = JSON.parse( await this.chatAppService.retrieveUsers());

    this.conversations = JSON.parse(await this.chatAppService.retrieveConversations());

    this.latestMessage = this.conversations[this.conversations.length - 1]

    for(let key in this.latestMessage){
      this.latestValues.push(this.latestMessage[key])
      this.latestKeys.push(key)
    }

  }

  myFriendsNavigate(){
    this.router.navigate(['friends']);
  }

  conversationNavigate(){
    this.router.navigate(['conversation']);
  }

}
