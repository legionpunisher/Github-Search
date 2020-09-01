import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {Repository} from '../repository';
import {User} from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Output() emitSearch = new EventEmitter<any>()

  searchDetail: string;
  constructor() { }

  search() {
    this.emitSearch.emit(this.searchDetail)    
  }
  
  ngOnInit() {
  }

}
