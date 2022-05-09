import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  constructor(
    private AuthService: AuthService,
    private rotuer: Router
  ) { }

  ngOnInit(): void {
  }

  logOut(){
    this.AuthService.logOut().then(
      () => {
        this.rotuer.navigate(['/login']);
      }
    )
  }

}
