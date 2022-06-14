import { Component, OnInit } from '@angular/core';
import { Ipost } from 'src/app/models/Posts';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-blogadmin',
  templateUrl: './blogadmin.component.html',
  styleUrls: ['./blogadmin.component.css']
})
export class BlogadminComponent implements OnInit {
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
  onRemoveItem(id: any){
    const confirm= window.confirm("Are you sure you want to remove")
    if(confirm){
      this.postService.removeuser(id).subscribe(data=>{
        this.blogList=this.blogList.filter(item => item.id !== id);
      })
    }
      }
    
    }
