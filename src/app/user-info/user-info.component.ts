import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {ProfileService} from '../profile-service/profile.service';
import {Userhub} from '../userhub';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  hubuser:Userhub[];

  constructor(public serviceProfile:ProfileService) { }

  ngOnInit() {
    this.searchProfile("legionpunisher");
  }  

  searchProfile(searchDetail){
    this.serviceProfile.searchUserhub(searchDetail).then(
      ()=>{
        this.hubuser=this.serviceProfile.hubuser;
        console.log(this.hubuser);
      },
      (error)=>{
        console.log(error)
      }
    )
  }
}