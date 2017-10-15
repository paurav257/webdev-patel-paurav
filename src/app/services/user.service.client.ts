import {Injectable} from '@angular/core';
import {User} from '../models/user.model.client';

// injecting service into module
@Injectable()

export class UserService {

  constructor() {
  }

  users: User [] = [
    new User('123', 'alice', 'alice', 'Alice', 'Wonder', 'alice@gmail.com'),
    new User('234', 'bob', 'bob', 'Bob', 'Marley', 'bob@gmail.com'),
    new User('345', 'charly', 'charly', 'Charly', 'Garcia', 'charly@gmail.com'),
    new User('456', 'jannunzi', 'jannunzi', 'Jose', 'Annunzi', 'ja@gmail.com')
  ];

  api = {
    'createUser': this.createUser,
    'findUserById': this.findUserById
  };

  createUser(user: User) {
    user['_id'] = Math.floor(Math.random() * 1000) + '';
    this.users.push(user);
    return user;
  }

  findUserById(userId: String) {
    return this.users.find(function (user) {
      return user['_id'] === userId;
    });
  }

  findUserByUsername(username: String) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]['userName'] === username) {
        return this.users[x];
      }
    }
  }

  updateUser(userId, user) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]['_id'] === userId) {
        this.users[x]['firstName'] = user.firstName;
        this.users[x]['lastName'] = user.lastName;
        this.users[x]['userName'] = user.userName;
        this.users[x]['email'] = user.email;
        return this.users[x];
      }
    }
  }

  deleteUser(userId) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]['_id'] === userId) {
        delete this.users[x];
      }
    }
  }
}
