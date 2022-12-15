import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{
  afterMenu:any

  constructor(){

  }

  ngOnInit(): void {

  }

  about(){
    console.log('about')
  }

  home(){
    console.log('home')
  }
}
