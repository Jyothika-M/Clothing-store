import { Component } from '@angular/core';
import { Carousel } from "../../component/carousel/carousel";
import { Card } from "../../component/card/card";



@Component({
  selector: 'app-home',
  imports: [Carousel, Card],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
