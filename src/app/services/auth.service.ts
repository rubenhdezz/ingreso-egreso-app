import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Usuario } from '../models/usuario.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth,
    public fireStore: AngularFirestore
  ) { }

  initAuthListener() {
    this.auth.authState.subscribe(
      fuser => {
        console.log(fuser);
      }
    )
  }

  crearUsuario(nombre: string, email: string, password: string){
    return this.auth.createUserWithEmailAndPassword(email, password)
    .then( ({ user }) => {
        const newUser = new Usuario(user?.uid, nombre, user?.email)
        return this.fireStore.doc(`${user?.uid}/usuario`).set({...newUser});
      }
    )
  }

  loginUsuario(email: string, password: string){
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logOut(){
    return this.auth.signOut();
  }
  
  isAuth(){
    return this.auth.authState.pipe(
      map(
        fbUser => fbUser != null
      )
    )
  }
}
