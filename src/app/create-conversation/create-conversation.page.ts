import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { ChatAppService } from '../services/chat-app.service';

@Component({
  selector: 'app-create-conversation',
  templateUrl: './create-conversation.page.html',
  styleUrls: ['./create-conversation.page.scss'],
})
export class CreateConversationPage implements OnInit {
  name: string;
  contact: string;
  message: string;

  conversations: [];

  constructor(private navParams: NavParams, private modalController: ModalController, private chatAppService: ChatAppService) { }

  async ngOnInit() {
    this.conversations = JSON.parse(await this.chatAppService.retrieveConversations());

      // Pass name, contact, message from create-conversations to conversations via navParams
    this.name = this.navParams.get("name");
    this.contact = this.navParams.get("contact");
    this.message = this.navParams.get("message");
  }

  // Dismiss the modal with saving name and contact
  sendMessage(){
    this.modalController.dismiss({name:this.name,contact:this.contact, message: this.message});
  }

}
