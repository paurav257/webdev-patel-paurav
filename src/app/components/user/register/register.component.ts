import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  @ViewChild('f') registrationForm: NgForm;

  // userName: String;
  // password: String;
  // lastName: String;
  // firstName: String;
  // email: String;
  user: User;
  verifyPassword: String;
  errorFlag: Boolean;
  errorMsg: String;

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    this.user = new User('', '', '', '', '', '');
  }

  createUser() {
    this.user.userName = this.registrationForm.value.userName;
    this.user.password = this.registrationForm.value.password;
    this.user.firstName = this.registrationForm.value.firstName;
    this.user.lastName = this.registrationForm.value.lastName;
    this.user.email = this.registrationForm.value.email;
    this.verifyPassword = this.registrationForm.value.verifyPassword;

    if (this.user.password !== this.verifyPassword) {
      this.errorFlag = true;
      this.errorMsg = 'Passwords are not matching!';
    } else {
      const user = this.userService.createUser(this.user);
      if (user) {
        this.router.navigate([`/user/${user._id}`]);
      } else {
        this.errorFlag = true;
        this.errorMsg = 'Failed to create User!';
      }
    }
  }
}