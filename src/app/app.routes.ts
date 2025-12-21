import { Routes } from '@angular/router';
import { Home } from './page/home/home';
import { Contacts } from './page/contacts/contacts';
import { ProductDetail } from './page/product-details/product-details';

export const routes: Routes = [
    {
        path:'',
        component:Home
    },
    {
        path:'contact',
        component:Contacts
    },
    {
        path:'products/:id',
        component:ProductDetail
    },
];
