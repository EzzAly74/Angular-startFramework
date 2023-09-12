import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  text: string = 'CONATCT SECTION';

  userName: string = 'userName :';
  userAge: string = 'userAge :';
  userEmail: string = 'userEmail :';
  userPassword: string = 'userPassword :';

  userN() {
    let spanName = document.querySelector('.spanName') as HTMLElement;
    let userName = document.querySelector('#userName') as HTMLInputElement;
    if (userName.value.length) spanName.classList.remove('customStyleName');
    else spanName.classList.add('customStyleName');
  }

  userA() {
    let spanName = document.querySelector('.spanAge') as HTMLElement;
    let userAge = document.querySelector('#userAge') as HTMLInputElement;
    if (userAge.value.length) spanName.classList.remove('customStyleAge');
    else spanName.classList.add('customStyleAge');
  }

  userE() {
    let spanName = document.querySelector('.spanEmail') as HTMLElement;
    let userName = document.querySelector('#userEmail') as HTMLInputElement;
    if (userName.value.length) spanName.classList.remove('customStyleEmail');
    else spanName.classList.add('customStyleEmail');
  }

  userP() {
    let spanName = document.querySelector('.spanPass') as HTMLElement;
    let userName = document.querySelector('#userPass') as HTMLInputElement;
    if (userName.value.length) spanName.classList.remove('customStylePass');
    else spanName.classList.add('customStylePass');
  }
}
