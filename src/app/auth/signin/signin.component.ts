import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {StaticMessages} from '../../shared/services/static-messages';
import {AuthService} from '../auth.service';
import {TokenStorageService} from '../../shared/services/token-storage-service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  staticmsgs = StaticMessages;
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private storageToken: TokenStorageService) {

  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }


  async login() {
    if (this.loginForm.valid) {
      let data = await this.authService.login(this.loginForm.value);
      console.log(data);
      this.storageToken.saveToken(data.token);
      this.storageToken.saveUser(data.user)

      this.router.navigate(['/']);
    }

  }

}
