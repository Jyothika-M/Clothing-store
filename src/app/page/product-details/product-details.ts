import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-product-detail',
    imports: [],
    templateUrl: './product-details.html',
    styleUrl: './product-details.css',
})
export class ProductDetail implements OnInit {
    product: any;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            if (history.state && history.state.product) {
                this.product = history.state.product;
            }
        });
    }
}