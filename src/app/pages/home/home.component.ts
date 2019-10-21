import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service'
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private posts: PostsService, private auth:AuthService) { }

  ngOnInit() {
    this.posts.getGifs()
  }

}
