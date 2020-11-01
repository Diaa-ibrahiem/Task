import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HTTPService } from 'src/app/services/http.service';

@Component({
  selector: 'app-all-post-compon',
  templateUrl: './all-post-compon.component.html',
  styleUrls: ['./all-post-compon.component.css']
})
export class AllPostComponComponent implements OnInit {
PostArr:any = [];
url:string = 'https://jsonplaceholder.typicode.com/posts'

  constructor(public HTTP:HTTPService,public fb: FormBuilder, public hh:HttpClient) { }

  ngOnInit(): void {
    this.LoadData()
  }

  LoadData(){
    this.HTTP.getPosts().subscribe(data => {
      this.PostArr = data;
    })
  }

  deletePost(post) {
    this.HTTP.deletePost(post.id).subscribe(params => {
      console.log('Done');
    })
  }

}
