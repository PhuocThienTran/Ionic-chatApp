// MARK: a special page: add-people is a modal

import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-people',
  templateUrl: './add-people.page.html',
  styleUrls: ['./add-people.page.scss'],
})
export class AddPeoplePage implements OnInit {
  name: string;
  contact: string;

  constructor(private navParams: NavParams, private modalController: ModalController, private alertController: AlertController) { }

  ngOnInit() {
    // Pass name and contact from add-people to friends via navParams
    this.name = this.navParams.get("name");
    this.contact = this.navParams.get("contact");
  }

  // presentAlert creates an alert when creating a new user, alerts the associated message with the attached button, then
  // dismiss the modal with saving name and contact

  presentAlert():Promise<boolean> {
    return new Promise(() => {
      const ctl = this.alertController;
      let alert:any = this.alertController.create({
        message: 'This will send an invitation to the added person\'s nominated email. Refresh to see person being added.',
        buttons: [{
          text: 'I understand',
          handler: () => {
            ctl.dismiss().then(() => { this.modalController.dismiss({name:this.name,contact:this.contact}); });
            return false;
          }
        }]
      }).then((dlg) => dlg.present());
    });
  }

}
