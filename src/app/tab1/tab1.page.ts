import { Component } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { WithIonContentComponent } from '../modals/with-ion-content/with-ion-content.component';
import { WithoutIonContentComponent } from '../modals/without-ion-content/without-ion-content.component';
import { CsvService } from '../services/csv.service';


const jsonData =  [
  {
    name: 'Anil Singh',
    age: 33,
    average: 98,
    approved: true,
    description: 'I am active blogger and Author.'
  },
  {
    name: 'Reena Singh',
    age: 28,
    average: 99,
    approved: true,
    description: 'I am active HR.'
  },
  {
    name: 'Aradhya',
    age: 4,
    average: 99,
    approved: true,
    description: 'I am engle.'
  }
];

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  constructor(private modalController: ModalController, private platform: Platform, private csvService: CsvService) {}

  async present(withIonContent = false) {
    const modal = await this.modalController.create({
      component: withIonContent ? WithIonContentComponent : WithoutIonContentComponent,
      cssClass: 'mobile-transfer-confirmation'
    });

    await modal.present();
  }

  async share() {
    //Check if user is running inside of mobile app
    console.log('share', this.platform.is('hybrid'));
    if(!this.platform.is('hybrid')) {
      this.downloadFile();
      return;
    }
    await this.csvService.shareFile(jsonData);
  }

private downloadFile() {
  this.csvService.downloadFile(jsonData, 'jsontocsv');
}


}
