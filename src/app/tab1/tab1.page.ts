import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  formGroup: FormGroup;
  isLoading = false;
  constructor(private router: Router, private formBuilder: FormBuilder,
              private screenOrientation: ScreenOrientation, private zone: NgZone, private readonly platform: Platform) {

    this.formGroup = this.formBuilder.group({
      email: [undefined, Validators.required],
      password: [undefined, Validators.required],
      num: [undefined]
    });
    this.platform.ready().then(async () => {
      await this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    });
  }

  async ngOnInit(): Promise<void> {

    console.log('ngOnInit');
    this.zone.run(() => {
      console.log(this.screenOrientation.type); // logs the current orientation, example: 'landscape'
    });
      // get current


// set to landscape
await this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

// allow user rotate
await this.screenOrientation.unlock();

// detect orientation changes
this.screenOrientation.onChange().subscribe(
   () =>
   this.zone.run(() => {
     console.log("Orientation Changed");
    })
);
  }

  async submit() {
    console.log('submit');
    this.isLoading = true;
    of(true).pipe(delay(3000)).subscribe(result => {
      console.log('done!');
      this.isLoading = false;
      this.router.navigateByUrl('tabs/tab2');
    })

  }

  login() {
    this.router.navigateByUrl('/login', {
      replaceUrl: true
    });
  }

}
