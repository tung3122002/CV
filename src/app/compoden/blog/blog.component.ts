import { Component, OnInit } from '@angular/core';
import { Ipost } from 'src/app/models/Posts';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogList!:Ipost[]
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.showUser()
  }
  showUser(){
    this.postService.getposts().subscribe(data =>{
      console.log(data)
      this.blogList=data
    })
  }
}

