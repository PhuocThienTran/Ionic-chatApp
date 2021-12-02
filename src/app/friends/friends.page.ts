import { Component, OnInit, ViewChild } from '@angular/core';
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
    console.log(this.users)
  }

   // MARK: Search through list of tutors from storage
   _ionChange(event) {
    const val = event.target.value;
    if (val.length > 0){
      this.usersFiltered = this.users.filter((item: any) => { // MARK: Filter for tutor's firstname
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
        this.showSearch = false;
      })
    } else {
      this.showSearch = true;
    }
  }
  // MARK: When click cancel button on searchbar, tutor list will restore back to deafult 
  _alert() {
    this.usersFiltered = this.users
  }
  

  // MARK: When enter favourited-tutors, load new stored tutors 
  async ionViewDidEnter(){
    this.users = JSON.parse (await this.chatAppService.retrieveUsers());
    
  }

}
