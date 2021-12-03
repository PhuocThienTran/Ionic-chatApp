import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';


@Component({
  selector: 'app-add-people',
  templateUrl: './add-people.page.html',
  styleUrls: ['./add-people.page.scss'],
})
export class AddPeoplePage implements OnInit {
  name: string;
  contact: string;

  constructor(private navParams: NavParams, private modalController: ModalController) { }

  ngOnInit() {
    this.name = this.navParams.get("name");
    this.contact = this.navParams.get("contact");
  }

  closemodal(){
    this.modalController.dismiss({name:this.name,contact:this.contact});
  }

}
