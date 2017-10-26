import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

// injecting service into module
@Injectable()

export class UserService {

  constructor(private http: Http) {
  }

  baseUrl = environment.baseUrl;

  findUserByCredentials(username: String, password: String) {
    const url = this.baseUrl + '/api/user?userName='
      + username + '&password=' + password;
    return this.http.get(url)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  createUser(user) {
    const url = this.baseUrl + '/api/user';
    return this.http.post(url, user)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findUserById(userId: String) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.get(url)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findUserByUsername(username: String) {
    const url = this.baseUrl + '/api/user?userName=' + username;
    return this.http.get(url)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  updateUser(userId, user) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.put(url, user)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  deleteUser(userId) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.delete(url)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }
}
