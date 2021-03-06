import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  name: string;
  contact: string;
  password: any;

  constructor(private navParams: NavParams, private modalController: ModalController) { }

  ngOnInit() {
    this.name = this.navParams.get("name");
    this.contact = this.navParams.get("contact");
    this.password = this.navParams.get("password");
  }

  closemodal(){
    this.modalController.dismiss({name:this.name,contact:this.contact,password:this.password});
  }

}
