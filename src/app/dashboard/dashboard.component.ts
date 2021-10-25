import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users$: User[];

  constructor(private serviceService : ServiceService) {}

  ngOnInit(){
    return this.serviceService.getUsers()
      .subscribe(data => this.users$ = data)
  }

}
