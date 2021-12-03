import { Component, OnInit } from '@angular/core';
import { ChatAppService } from '../services/chat-app.service';
import { Storage } from '@ionic/storage-angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.page.html',
  styleUrls: ['./conversation.page.scss'],
})
export class ConversationPage implements OnInit {
  name: string;
  contact: string;

  users = []
  conversations = []

  constructor(private router:Router, private chatAppService: ChatAppService, private storage: Storage) { }

  async ngOnInit() {
    this.conversations = JSON.parse(await this.chatAppService.retrieveConversations());
    console.log(this.conversations[2])
  }

  messageNavigate(){
    this.router.navigate(['conversation']);
  }

}
