import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import * as ui from 'src/app/shared/ui.actions';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup;
  loading: boolean = false;
  uiSubscription!: Subscription;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })

   this.uiSubscription = this.store.select('ui')
    .subscribe( ui => this.loading = ui.isLoading );
  }

  ngOnDestroy(): void {
    this.uiSubscription?.unsubscribe();
  }

  login(){
    if(this.loginForm.invalid) { return; }


    this.store.dispatch(ui.isLoading());    
    // Swal.fire({
    //   title: 'Espere por favor!',   
    //   didOpen: () => {
    //     Swal.showLoading()
    //   }
    // });

    const {email, password} = this.loginForm.value;
    this.authService.loginUsuario(email, password)
    .then(
      login => {
      // Swal.close();
      this.store.dispatch(ui.stopLoading());
      this.router.navigate(['/']);
      })
    .catch(
      err => {
        this.store.dispatch(ui.stopLoading());
        Swal.fire({
          title: 'Error!',
          text: err.message,
          icon: 'error',
        })
      }
    )
  }

}
