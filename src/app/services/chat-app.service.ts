import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class ChatAppService {
  name: string;
  contact: string;
  message: string;
  user: any;

  users = [
    {name: 'Ishini', contact: 'ishini@a.com'},
    {name: 'Finn', contact: 'finn@a.com'},
    {name: 'Paul', contact: 'paul@a.com'},
    {name: 'Pauline', contact: 'pauline@a.com'},
    {name: 'John', contact: 'john@a.com'},
    {name: 'Danny', contact: 'danny@a.com'},
  ]
  
  conversations = [
    {user: this.users[0], message: "Hello"},
    {user: this.users[1], message: "Whats up?"},
    {user: this.users[0], message: "Not much"},
    {user: this.users[2], message: "Programming is hard"}
  ]
  

  constructor(private storage: Storage){
    this.init();
   }

   async init(){
    const storage = await this.storage.create()

    if ( await this.storage.get('users') == undefined ){
      this.storage.set('users', JSON.stringify(this.users))
    }

    if ( await this.storage.get('conversations') == undefined ){
      this.storage.set('conversations', JSON.stringify(this.conversations))
    }
   }
  

  // MARK: Set a new tutor
  createUsers(users){
    this.storage.set('users', JSON.stringify(users))
  }

  async retrieveUsers(){
    return this.storage.get('users')
  }

  createConversations(conversations){
    this.storage.set('conversations', JSON.stringify(conversations))
  }

  async retrieveConversations(){
    return this.storage.get('conversations')
  }
  
}
