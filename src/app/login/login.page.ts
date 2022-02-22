import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;
  displayPassword = false;
  displayBiometricsIcon = false;
  requestDob = false;
  rememberUser = false;
  biometricsImageSource = 'https://via.placeholder.com/256';
  content = {
    usernameLabel: 'usernameLabel',
    rememberMeLabel: 'rememberMeLabel',
    passwordLabel: 'passwordLabel',
    biometricsIconAria: 'biometricsIconAria',
    showPasswordLabel: 'showPasswordLabel',
    dateOfBirthLabel: 'dateOfBirthLabel',
    invalidDateErrorLabel: 'invalidDateErrorLabel',
    loginButtonText: 'loginButtonText'
  };
  constructor(private readonly formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
			username: [undefined, Validators.required],
			password: [undefined, Validators.required]
		});
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(values => console.log('changes', values));
  }

  biometricAuth() {

  }

  toggleShowPassword(evt: any) {}

  toggleRememberUser(evt: any) {

  }

  passwordLogin() {

  }

}
