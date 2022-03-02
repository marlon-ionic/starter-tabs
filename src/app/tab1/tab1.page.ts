import { Component } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  formGroup: FormGroup;
  isLoading = false;
  constructor(private router: Router, private formBuilder: FormBuilder) {

    this.formGroup = this.formBuilder.group({
      email: [undefined, Validators.required],
      password: [undefined, Validators.required],
      num: [undefined]
    });
  }

  async submit() {
    this.isLoading = true;
    of(true).pipe(delay(3000)).subscribe(() => {
      this.isLoading = false;
      this.router.navigateByUrl('tabs/tab2');
    });
  }

}
