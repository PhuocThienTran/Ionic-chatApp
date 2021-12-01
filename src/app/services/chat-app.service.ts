import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class ChatAppService {
  name: string;
  contact: string;

  users = [
    {name: 'Ishini', contact: 'ishini@a.com'},
    {name: 'Finn', contact: 'finn@a.com'},
    {name: 'Paul', contact: 'paul@a.com'},
  ]

  constructor(private storage: Storage){
    this.init();
   }

   async init(){
    const storage = await this.storage.create()

    if ( await this.storage.get('users') == undefined ){
      this.storage.set('users', JSON.stringify(this.users))
    }

    this.storage.get('fullName').then(val => {
      if(val == null){
        this.storage.set("fullName", "")
      }
      return this.storage.get("email").then(val => {
        if(val == null){
          this.storage.set("email", "")
        }
      return this.storage.get("password").then(val => {
        if(val == null){
          this.storage.set("password", "")
        }
        return this.storage.get("dob").then(val => {
          if(val == null){
            this.storage.set("dob", "")
          }
        })
      })
      })
    })
   }
  
  updatefullName(fullName){
    this.storage.set("fullName", fullName)
  }

  updateemail(email){
    this.storage.set("email", email)
  }

  updatepassword(password){
    this.storage.set("password", password)
  }

  updatedob(dob){
    this.storage.set("dob", dob)
  }

  // MARK: Set a new tutor
  createUsers(users){
    this.storage.set('users', JSON.stringify(users))

  }

  async retrieveUsers(){
    return this.storage.get('users')


  }
}
