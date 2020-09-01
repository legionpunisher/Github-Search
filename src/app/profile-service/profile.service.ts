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

  constructor() { }
}
