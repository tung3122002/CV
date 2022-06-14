import { Component, OnInit } from '@angular/core';
import { Iproject } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projeact',
  templateUrl: './projeact.component.html',
  styleUrls: ['./projeact.component.css']
})
export class ProjeactComponent implements OnInit {
  ProjectList!:Iproject[]
  constructor(private projectService:ProjectService) { }

  ngOnInit(): void {
    this.showUser()
  }
  showUser(){
    this.projectService.getProducts().subscribe(data =>{
      console.log(data)
      this.ProjectList=data
    })
  }
  onRemoveItem(id: any){
const confirm= window.confirm("Are you sure you want to remove")
if(confirm){
  this.projectService.removeuser(id).subscribe(data=>{
    this.ProjectList=this.ProjectList.filter(item => item.id !== id);
  })
}
  }

}
