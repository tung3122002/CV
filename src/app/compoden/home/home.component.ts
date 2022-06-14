import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from '../../models/User';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
userList!:Iuser
  constructor(private UserService:UserService,
    private router: ActivatedRoute,) { }

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get("id")!
    this.UserService.getUser(+id).subscribe(data=>{
      this.userList=data
    })
  }
  
  }


