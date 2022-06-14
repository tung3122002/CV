import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ipost } from 'src/app/models/Posts';
import { PostService } from '../../services/post.service';
@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  Blog: Ipost={
    title: "",
    createAt: 0,
    desc: "",
    shortdesc:"",
    image:"",
    categoryPostId:""
  };
  constructor(private router: Router,
    private postService:PostService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.postService.getpost(id).subscribe(data => {
        this.Blog = data
      })
    }
  }
  onSubmit()  {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.postService.updateuer(this.Blog).subscribe(data => {
        setTimeout(() => {
          // redirect về product list
          this.router.navigateByUrl('/blockadmin');
        }, 2000)
      })
    }
  this.postService.adduser(this.Blog).subscribe(data =>{
    console.log(data)
    setTimeout(() => 
    this.router.navigateByUrl('admin/blockadmin')
    )
  })
}
}
