import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }
  private apiKey: string = "uw4wKKkE6HvBcpN73PKA4gcmBbwlbemk"
  getGifs(){
    this.http.get(`http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=${this.apiKey}&limit=5`).subscribe(res=>console.log(res))
    
  }
}
