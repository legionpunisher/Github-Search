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
  userhubs: Userhub[] = [];
  repohubs: Repohub;

  constructor(private http: HttpClient) { }

  searchGithub(searchTerm: string) {
    interface data {
      login: string;
      username: string;
      avatar: string;
      html_url: string;
      name: string;
      url: string;
    }
  constructor() { }
}
