import { Component, OnInit } from '@angular/core';
import { AuthService  } from '../../services/auth.service'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private auth: AuthService) { }

  public errorUser:string = ''
  public errorEmail:string = ''
  public errorPassword:string = ''
  public errorRePassword:string = ''


  ngOnInit() {
  }
  submit(e){
    let {username, email, password, repassword} = e


    if(username.length < 8 || username == ''){
     this.errorUser = 'El username debe superar los 8 caracteres'
    }else{
      this.errorUser = ''
    }

    if(email.indexOf('@') == -1 ){
      this.errorEmail = 'Ingrese un correo valido'
    }else{
      this.errorEmail = ''
    }

    if(password.length < 10){
      this.errorPassword = 'La contrasena debe tener minimo 10 caracteres'
    }else{
      this.errorPassword = ''
    }

    if(password !== repassword){
      console.log('no matchean')
      console.log(password, repassword)
      this.errorRePassword = 'La contrasena no coincide'
    }else{
      this.errorRePassword = ''
    }

    if(this.errorEmail == '' && this.errorUser == '' && this.errorPassword == '' && this.errorRePassword == ''){
      this.auth.signUpWithMail(email,password)
      console.log('Registrado con exito, no sos alto topo')
    }

    // let mail = 'bbueri@the-8agency.com'
    // let password = 'palermo'
    // console.log('submit',mail,password)
    alert('submiteando..')
    console.log(e)
  }
}
