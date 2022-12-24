import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {

  users: User[] = []
  constructor( private api: ApiService){

  }

  ngOnInit() {
    console.log(this.users)
    this.getUsers()
  }

  getUsers(){
    let data = this.api.getUsers().subscribe( res =>{
      let info:any = res;
      this.users = info.data
    })
  
  }


}
