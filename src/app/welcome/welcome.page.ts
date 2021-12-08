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
    // Parse the current users -> array from the retrieveUsers() in service
    this.users = JSON.parse( await this.chatAppService.retrieveUsers());

    // Parse the current conversations -> array from the retrieveConversations() in service
    this.conversations = JSON.parse(await this.chatAppService.retrieveConversations());

    // Output the latestMessage as the last index from the parsed conversations
    this.latestMessage = this.conversations[this.conversations.length - 1]

    // For loop to get the values and keys of the latestMessage for the welcome page
    for(let key in this.latestMessage){
      this.latestValues.push(this.latestMessage[key])
      this.latestKeys.push(key)
    }

  }

  // Navigate to respective pages
  
  myFriendsNavigate(){
    this.router.navigate(['friends']);
  }

  conversationNavigate(){
    this.router.navigate(['conversation']);
  }

}
