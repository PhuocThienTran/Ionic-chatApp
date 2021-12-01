import { Component, OnInit } from '@angular/core';
import { ChatAppService } from '../services/chat-app.service';
import { ModalController } from '@ionic/angular'



@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {
  name: string;
  contact: string;

  users = []

  usersFiltered = [];

  showSearch = true;

  constructor(private chatAppService: ChatAppService, private modalController: ModalController) { }

  async ngOnInit() {
    this.users = JSON.parse( await this.chatAppService.retrieveUsers());
    this.usersFiltered = this.users
  }

}
