import { Injectable } from '@angular/core';
import { User } from '../interfaces/user'
import { Router  } from '@angular/router'

import { auth } from 'firebase/app'
import { AngularFireAuth  } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument   } from "@angular/fire/firestore";

import { Observable, of } from "rxjs";
import { switchMap  } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  user$: Observable<User>;
  themeDark: boolean = false;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router

  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if(user){
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
        }else{
 
          return of(null)
        }
      })
    )
   }

   async googleSignin(){
     const provider = new auth.GoogleAuthProvider();
     const credential = await this.afAuth.auth.signInWithPopup(provider);
     return this.updateUserData(credential.user);

   }

   private updateUserData(user){
     const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`)

     const data = {
       uid: user.uid,
       email: user.email,
       displayName: user.displayName,
       photoURL: user.photoURL,
       themeDark: false,
       admin:false
     }

     return userRef.set(data, {merge: true})
   }

   async signOut(){
     await this.afAuth.auth.signOut();
     this.router.navigate(['/login']);
   }

  

   signUpWithMail(email, password){
     return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result)=>{
        window.alert('You have been successfully registered')
        console.log(result.user)
      }).catch(error=>{
        window.alert(error.message)
      })
   }
   signInWithMail(email,password){
     return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(result=>{
        this.updateUserData(result.user)
        this.router.navigate(['/profile'])
      }).catch(error=>{
        window.alert(error.message)
      })
   }
   changeTheme(){
     this.themeDark = !this.themeDark
     console.log('cambio tema...',this.themeDark)
   }
}

