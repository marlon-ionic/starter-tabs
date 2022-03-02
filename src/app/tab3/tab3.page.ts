import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Modal1Component } from '../modal1/modal1.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private modalController: ModalController) {}


  async launch() {
    const modal = await this.modalController.create({
      component: Modal1Component,
    });
    modal.addEventListener('ionModalDidPresent', async () => {
      console.log('modal.ionModalDidPresent', modal);
    });
    await modal.present();
  }
}
