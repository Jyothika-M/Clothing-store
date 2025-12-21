import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './component/navbar/navbar';
import { Footer } from "./component/footer/footer";
import { Carousel } from "./component/carousel/carousel";
import { Home } from "./page/home/home";
import { Contacts } from "./page/contacts/contacts";

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  //protected readonly title = signal('project');
  ngOnInit(): void {
    console.log('app initialized')
    
  }
}

