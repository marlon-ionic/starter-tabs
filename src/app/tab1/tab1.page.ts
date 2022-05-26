import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WithIonContentComponent } from '../modals/with-ion-content/with-ion-content.component';
import { WithoutIonContentComponent } from '../modals/without-ion-content/without-ion-content.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private modalController: ModalController) {}

  async present(withIonContent = false) {
    const modal = await this.modalController.create({
      component: withIonContent ? WithIonContentComponent : WithoutIonContentComponent,
      cssClass: 'mobile-transfer-confirmation'
    });

    await modal.present();
  }



}
