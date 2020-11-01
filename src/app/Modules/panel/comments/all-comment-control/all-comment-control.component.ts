import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HTTPService } from 'src/app/services/http.service';

@Component({
  selector: 'app-all-comment-control',
  templateUrl: './all-comment-control.component.html',
  styleUrls: ['./all-comment-control.component.css']
})
export class AllCommentControlComponent implements OnInit {
  commentForm:FormGroup;

  constructor(public HTTP:HTTPService,public fb:FormBuilder) {
   }

  ngOnInit(): void {
    this.MyForm()
  }
  MyForm(){
    this.commentForm = this.fb.group({
      userId: '',
      id: '',
      name: '',
      email: '',
      body: '',
    });
  }

  Createcomment(input:HTMLInputElement,input2:HTMLInputElement,input3:HTMLInputElement,input4:HTMLInputElement,input5:HTMLInputElement){
    let post = {postId :input?.value,id :input2?.value,name :input3?.value,email :input4?.value,body :input5?.value}
    this.HTTP.CreateComment(post).subscribe(param => {
      console.log('params is',param);
    })
  }

  updatecomment(input:HTMLInputElement,input2:HTMLInputElement,input3:HTMLInputElement,input4:HTMLInputElement,input5:HTMLInputElement){
    let id = input2.value;
    let post = {postId :input?.value,id :input2?.value,name :input3?.value,email :input4?.value,body :input5?.value}
    this.HTTP.UpdateComment(id,post).subscribe(params => {
      console.log('updated');
    })
  }
}
