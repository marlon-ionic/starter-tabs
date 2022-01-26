import { Component, ElementRef, HostListener, NgZone, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  isScrollingAgreement = true;
  safeFrameResourceURL: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer, private zone: NgZone) {
    //Sets the src for the iframe and passes the origin. This just makes it easier to handle different environments for the same iframe page
    const url = `https://marlonharrison.com/static/demos/eula.html?o=${location.origin}`;
    this.safeFrameResourceURL = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  frameLoaded(e: Event) {
    window.addEventListener('message', (evt: MessageEvent) => {
      console.log('message!', evt);
      this.zone.run(() => this.isScrollingAgreement = !evt.data.hasScrolledToEnd);
    });
  }

  agreeClick(){
    console.log('agree click!');
  }
}
