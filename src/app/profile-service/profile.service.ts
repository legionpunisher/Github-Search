import { Injectable } from '@angular/core';
import {Repository} from '../repository';
import {User} from '../user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {Userhub} from '../userhub';
import {Repohub}from '../repohub';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  hubuser: Userhub[] = [];
  repohubs: Repohub;

  constructor(private http: HttpClient) { }

  searchUserhub(searchDetail: string) {
    interface data {
      login: string;
      username: string;
      avatar: string;
      html_url: string;
      name: string;
      url: string;
    }
    let promise = new Promise((resolve, reject) => {

      this.http.get<data>('https://api.github.com/users/' + searchDetail + '?access_token=' + environment.access_token).toPromise().then(
        (results) => {
          this.hubuser = [];
          this.hubuser.push(results);
          console.log(results)
          resolve()
        },
        (error) => {
          console.log(error)
          reject()
        }
      )
    })
    return promise;
  }
}
