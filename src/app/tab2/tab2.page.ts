import { Component, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild('firstInput') firstInput?: IonInput;
  verificationCode?: string;
  codeIsInvalid = false;

  constructor() {}

  async ionViewDidEnter()  {
    console.log('Tab2Page.ionViewDidEnter', this.firstInput);
    if(this.firstInput) {
      await this.firstInput.setFocus();
    }
  }

}
