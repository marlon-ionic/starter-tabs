import { Component } from '@angular/core';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  isUnlocked = false;
  constructor(private readonly screenOrientation: ScreenOrientation, private readonly platform: Platform) {
    this.init();
  }

  async toggle() {
    if(this.platform.is('hybrid')) {
      if(this.isUnlocked) {
        await this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        this.isUnlocked = false;
      } else {
        await this.screenOrientation.unlock();
        this.isUnlocked = true;
      }
    }
  }

  private async init(): Promise <void> {
    if(this.platform.is('hybrid')) {
      await this.platform.ready();
      await this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    }
  }

}
