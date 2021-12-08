import { Component, OnInit, ViewChild } from '@angular/core';
import { ChatAppService } from '../services/chat-app.service';
import { ModalController } from '@ionic/angular';
import { AddPeoplePage } from '../add-people/add-people.page';

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

  // Calls the AddPeople modal to create a new user
  async signUpNavigate(){
    const modal = await this.modalController.create({
      component: AddPeoplePage,
      componentProps: {title: 'Add' }
    });
   
    modal.onDidDismiss()
      .then((retval) => {
        if (retval.data.name !== undefined){
          this.userSignUp(retval.data); // Push data into userSignUp()
        }
   });
     return modal.present();
    
  }
  // Update storage after creating a new user
  userSignUp(val) {
    this.users.push(val);
    this.chatAppService.createUsers(this.users)
  }   

  // After leaving friends, save any changes to the storage
  ionViewDidLeave(){
    this.chatAppService.createUsers(this.users);
  }

   // _ionChange() allows existing users to be searched via search bar
   _ionChange(event) {
    const val = event.target.value;
    if (val.length > 0){
      this.usersFiltered = this.users.filter((item: any) => { // Filter through the users names
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
        this.showSearch = false;
      })
    } else {
      this.showSearch = true;
    }
  }
  // Click cancel button on searchbar, users list will restore back to deafult 
  _alert() {
    this.usersFiltered = this.users
  }
  

  // Enter friends, load new stored users 
  async ionViewDidEnter(){
    this.users = JSON.parse (await this.chatAppService.retrieveUsers());
    
  }

}
