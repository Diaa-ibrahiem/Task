import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HTTPService } from 'src/app/services/http.service';

@Component({
  selector: 'app-all-post-control',
  templateUrl: './all-post-control.component.html',
  styleUrls: ['./all-post-control.component.css']
})
export class AllPostControlComponent implements OnInit {
  AddUpdateFrom:FormGroup;
  PostArr:any = []; 
  constructor(public HTTP:HTTPService,public fb:FormBuilder) { }

  ngOnInit(): void {
    this.LoadData();
    this.MyForm()
  }

  LoadData(){
    this.HTTP.getPosts().subscribe(data => {
      this.PostArr = data;
    })
  }

  MyForm(){
    this.AddUpdateFrom = this.fb.group({
      userId: '',
      id: '',
      title: '',
      body: '',
    });
  }

  CreatePost(input:HTMLInputElement,input2:HTMLInputElement,input3:HTMLInputElement,input4:HTMLInputElement){
    let post = {userid :input?.value,id :input2?.value,title :input3?.value,body :input4?.value}
    this.HTTP.CreatePosts(post).subscribe(param => {
      console.log('params is',param);
    })
  }

  updatePost(input:HTMLInputElement,input2:HTMLInputElement,input3:HTMLInputElement,input4:HTMLInputElement){
    let id = input2.value;
    let post = {userid :input?.value,id :input2?.value,title :input3?.value,body :input4?.value};
    this.HTTP.UpdatePost(id,post).subscribe(params => {
      console.log('updated'+ params);
    })
  }

}
