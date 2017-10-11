import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;

  username: String;
  password: String;
  errorFlag: Boolean;
  errorMsg: String;

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    const user = this.userService.findUserByUsername(this.username);
    if (!(user && user.password === this.password)) {
      this.errorFlag = true;
      this.errorMsg = 'Invalid username or password !';
    } else {
      this.router.navigate([`/user/${user._id}`]);
    }
  }
}
