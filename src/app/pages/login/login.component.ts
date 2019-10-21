import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService) {
    
   }

  ngOnInit() {
  }
  testMail(e){
    let email = e.email
    let password = e.password
    this.auth.signInWithMail(email, password)
    
  }

}
