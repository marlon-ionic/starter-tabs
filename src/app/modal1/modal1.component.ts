import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal1',
  templateUrl: './modal1.component.html',
  styleUrls: ['./modal1.component.scss'],
})
export class Modal1Component implements OnInit {
  @ViewChild('firstInput') firstInput?: IonInput;
  verificationCode?: string;
  codeIsInvalid = false;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  async ionViewDidEnter()  {
    console.log('Modal1Component.ionViewDidEnter', this.firstInput);
    if(this.firstInput) {
      await this.firstInput.setFocus();
    }
  }

  async dismiss() {
    await this.modalController.dismiss();
  }

}
