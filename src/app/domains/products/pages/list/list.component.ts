import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-list',
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  products = signal<Product[]>([]);
  cart = signal<Product[]>([]);

  constructor() {
    const initProducts: Product[] = [
      {
        id: 1,
        title: 'Product 1',
        price: 1000,
        image: 'https://picsum.photos/640/640?r=23',
      },
      {
        id: 2,
        title: 'Product 2',
        price: 1000,
        image: 'https://picsum.photos/640/640?r=23',
      },
      {
        id: 3,
        title: 'Product 3',
        price: 1000,
        image: 'https://picsum.photos/640/640?r=23',
      },
      {
        id: 4,
        title: 'Product 4',
        price: 1000,
        image: 'https://picsum.photos/640/640?r=23',
      },
      {
        id: 5,
        title: 'Product 5',
        price: 1000,
        image: 'https://picsum.photos/640/640?r=23',
      },
      {
        id: 6,
        title: 'Product 6',
        price: 1000,
        image: 'https://picsum.photos/640/640?r=23',
      },
    ];
    this.products.set(initProducts);
  }

  addToCart(product: Product) {
    this.cart.update((prevState) => [...prevState, product]);
  }
}
