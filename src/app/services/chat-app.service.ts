import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class ChatAppService {
  name: string;
  contact: string;
  id: any;
  message: string;
  user: any;

  users = [
    {name: 'Ishini', contact: 'ishini@a.com', id: Math.random().toString(4).slice(2)},
    {name: 'Finn', contact: 'finn@a.com', id: Math.random().toString(4).slice(2)},
    {name: 'Paul', contact: 'paul@a.com', id: Math.random().toString(4).slice(2)},
    {name: 'Pauline', contact: 'pauline@a.com', id: Math.random().toString(4).slice(2)},
    {name: 'John', contact: 'john@a.com', id: Math.random().toString(4).slice(2)},
    {name: 'Danny', contact: 'danny@a.com', id: Math.random().toString(4).slice(2)},
  ]
  
  conversations = [
    {user: this.users[0], message: "Hello"},
    {user: this.users[1], message: "Whats up?"},
    {user: this.users[0], message: "Not much"},
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
