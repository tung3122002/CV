import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from '../../models/User';

import { UserService } from '../../services/user.service';


// import { UserService } from '../services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
user: Iuser={
  name: "",
  position: "",
  about: "",
  cv:""
};
  constructor(private router: Router,
    private userService: UserService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.userService.getUser(id).subscribe(data => {
        this.user = data
      })
    }
  }
  onSubmit()  {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.userService.updateuer(this.user).subscribe(data => {
        setTimeout(() => {
          // redirect về product list
          this.router.navigateByUrl('admin/user');
        }, 2000)
      })
    }
  this.userService.adduser(this.user).subscribe(data =>{
    console.log(data)
    setTimeout(() => 
    this.router.navigateByUrl('admin/user')
    )
  })
}
}
