import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class ChatAppService {

  // The project's service page

  name: string;
  contact: string;
  message: string;
  user: any;

  // Initial users db
  users = [
    {name: 'Ishini', contact: 'ishini@a.com'},
    {name: 'Finn', contact: 'finn@a.com'},
    {name: 'Paul', contact: 'paul@a.com'},
    {name: 'Pauline', contact: 'pauline@a.com'},
    {name: 'John', contact: 'john@a.com'},
    {name: 'Danny', contact: 'danny@a.com'},
  ]
  
  // Initial conversations db
  conversations = [
    {name: "Ishini", contact: "ishini@a.com", message: "Hello"},
    {name: "Finn", contact: "finn@a.com",message: "Whats up?"},
    {name: "Ishini", contact: "ishini@a.com", message: "Not much"},
    {name: "Paul", contact: "paul@a.com", message: "Programming is hard"}
  ]

  // Potential conversation db that combines uers and conversations dbs

  // conversations = [
  //   {user: this.users[0], message: "Hello"},
  //   {user: this.users[1], message: "Whats up?"},
  //   {user: this.users[0], message: "Not much"},
  //   {user: this.users[2], message: "Programming is hard"}
  // ]
  

  constructor(private storage: Storage){
    this.init();
   }

   async init(){
    // init storage, stringify the current instance of users and conversations to send data -> storage
    const storage = await this.storage.create()

    if ( await this.storage.get('users') == undefined ){
      this.storage.set('users', JSON.stringify(this.users))
    }

    if ( await this.storage.get('conversations') == undefined ){
      this.storage.set('conversations', JSON.stringify(this.conversations))
    }
   }
  

  // Create a new user function via stringify inputted users -> storage
  createUsers(users){
    this.storage.set('users', JSON.stringify(users))
  }

  // Retrieve newly made/existing users
  async retrieveUsers(){
    return this.storage.get('users')
  }

  // Create a new conversation function via stringify inputted conversations -> stroage
  createConversations(conversations){
    this.storage.set('conversations', JSON.stringify(conversations))
  }

  // Retrieve newly made/existing conversations
  async retrieveConversations(){
    return this.storage.get('conversations')
  }
  
}
