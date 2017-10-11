import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('f') profileForm: NgForm;

  userId: String;
  errorFlag: Boolean;
  errorMsg: String;
  user: User;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
    });
    this.user = this.userService.findUserById(this.userId);
    if (!this.user) {
      this.router.navigate(['/login']);
    }
  }

  editProfile() {
    this.user = this.userService.findUserById(this.userId);
    this.user.userName = this.profileForm.value.userName.length > 0 ?
      this.profileForm.value.userName : this.user.userName;
    this.user.email = this.profileForm.value.email.length > 0 ?
      this.profileForm.value.email : this.user.email;
    this.user.firstName = this.profileForm.value.firstName.length > 0 ?
      this.profileForm.value.firstName : this.user.firstName;
    this.user.lastName = this.profileForm.value.lastName.length > 0 ?
      this.profileForm.value.lastName : this.user.lastName;
    this.userService.updateUser(this.userId, this.user);
    this.router.navigate([`/user/${this.userId}`]);
  }
}
