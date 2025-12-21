
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Services } from '../../services';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card implements OnInit {
  cards: any[] = [];
  constructor(
    private api_service: Services,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnInit():void {
    this.api_service.getProducts().subscribe((data: any) => {
      this.cards = data;
      console.log(this.cards);
      this.cdr.detectChanges();
    })
  }

  viewProductDetail(product: any) {
    this.router.navigate(['/products', product.id], { state: { product } });
  }
}