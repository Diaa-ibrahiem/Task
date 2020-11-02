import { Component, OnInit } from '@angular/core';
import { HTTPService } from 'src/app/services/http.service';

@Component({
  selector: 'app-land-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.css']
})
export class LandPageComponent implements OnInit {

  constructor(public HTTP:HTTPService) { }
PostArr:any = [];
  ngOnInit(): void {
    this.LoadData();
  }

  LoadData(){
    this.HTTP.getPosts().subscribe(data => {
      this.PostArr = data;
    })
  }

  checkUSer():boolean{
    if(!localStorage.getItem('user')){
      return false;
    }
    return true;
  }

}
