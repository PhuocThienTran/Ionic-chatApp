import { Component, OnInit } from '@angular/core';
import { ChatAppService } from '../services/chat-app.service';
import { ModalController } from '@ionic/angular';
import { CreateConversationPage } from '../create-conversation/create-conversation.page';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.page.html',
  styleUrls: ['./conversation.page.scss'],
})
export class ConversationPage implements OnInit {
  name: string;
  contact: string;
  message: string;

  users = []
  conversations = []

  constructor(private chatAppService: ChatAppService, private modalController: ModalController) { }

  async ngOnInit() {
    this.conversations = JSON.parse(await this.chatAppService.retrieveConversations());
    console.log(this.conversations)
  }

  // Calls the CreateConversation modal to create a new conversation
  async sendMessage(){
    const modal = await this.modalController.create({
      component: CreateConversationPage,
      componentProps: {title: 'Add' }
    });
   
    modal.onDidDismiss()
      .then((retval) => {
        if (retval.data.name !== undefined){
          this.converse(retval.data); // Push data into converse()
        }
   });
     return modal.present();
    
  }
  // Update storage after creating a new conversation
  converse(val) {
    this.conversations.push(val);
    this.chatAppService.createConversations(this.conversations)
  }   

  // After leaving conversations, save any changes onto storage
  ionViewDidLeave(){
    this.chatAppService.createConversations(this.conversations);
  }

  // Enter conversations, load new stored conversations 
  async ionViewDidEnter(){
    this.conversations = JSON.parse (await this.chatAppService.retrieveConversations());
    
  }
}
