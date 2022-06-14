import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../models/User';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userList!:Iuser[]
  constructor(private UserService:UserService) { }

  ngOnInit(): void {
    this.showUser()
  }
  showUser(){
    this.UserService.getProducts().subscribe(data =>{
      console.log(data)
      this.userList=data
    })
  }
  onRemoveItem(id: any){
const confirm= window.confirm("Are you sure you want to remove")
if(confirm){
  this.UserService.removeuser(id).subscribe(data=>{
    this.userList=this.userList.filter(item => item.id !== id);
  })
}
  }

}
