import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component'
import { AuthService} from './services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:[ "./app.component.scss"]
})
export class AppComponent {
  title = 'gyrphy';
  constructor(private auth:AuthService){}
}
