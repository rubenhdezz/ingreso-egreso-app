import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit, OnDestroy {
  nombre!: string | null | undefined;
  userSubs!: Subscription;

  constructor(
    private AuthService: AuthService,
    private rotuer: Router,
    private store: Store <AppState>
  ) { }

  ngOnInit(): void {
    this.userSubs = this.store.select('user')
    .pipe(
      filter( ({user}) => user != null )
    )
    .subscribe(
      ({user}) => this.nombre = user?.nombre
    )
  }

  ngOnDestroy(): void {
    this.userSubs.unsubscribe();
  }

  logOut(){
    this.AuthService.logOut().then(
      () => {
        this.rotuer.navigate(['/login']);
      }
    )
  }

}
