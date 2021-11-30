import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.page.html',
  styleUrls: ['./conversation.page.scss'],
})
export class ConversationPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {

  }

  messageNavigate(){
    this.router.navigate(['conversation']);
  }

}
