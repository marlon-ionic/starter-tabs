import { Component } from '@angular/core';
import { InAppBrowserOptions } from '@awesome-cordova-plugins/in-app-browser';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private iab: InAppBrowser) {}


  launch(shouldOverride = false) {
    const options: InAppBrowserOptions = {
      location: 'no'
    };
    if(shouldOverride) {
      options.beforeload = 'yes';
    }
    const browser = this.iab.create('https://web.dev/native-hardware-click-to-call/', '_blank', options);
    if(shouldOverride) {
      browser.on('beforeload').subscribe((event) => {
        console.log('browser:beforeload', event);
        // Check if event url is an action link
        if (event.url.startsWith('tel:') || event.url.startsWith('mailto:')) {
          console.log('Found an action link! ' + event.url);
          window.open(event.url, '_system');
          return;
        }
        // Nothing from above applies. Continue loading
        console.log('Beforeload released. Continue loading ' + event.url);
        // eslint-disable-next-line no-underscore-dangle
        browser._loadAfterBeforeload(event.url);
      });
    }
  }

}
