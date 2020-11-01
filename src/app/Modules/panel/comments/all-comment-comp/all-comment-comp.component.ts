import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HTTPService } from 'src/app/services/http.service';

@Component({
  selector: 'app-all-comment-comp',
  templateUrl: './all-comment-comp.component.html',
  styleUrls: ['./all-comment-comp.component.css']
})
export class AllCommentCompComponent implements OnInit {
  PostArr:any = [];
  constructor(public HTTP:HTTPService,public fb: FormBuilder) { }

  ngOnInit(): void {
    this.LoadData()
  }

  LoadData(){
    this.HTTP.getComments().subscribe(data => {
      this.PostArr = data;
    })
  }

  deletePost(post) {
    this.HTTP.deleteComment(post.id).subscribe(params => {
      console.log('Done');
    })
  }
}
