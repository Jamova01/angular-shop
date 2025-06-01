import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;

  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    console.log('Click from child');
    this.addToCart.emit(
      'Hola este es un message desde el hijo ' + this.product.title
    );
  }
  // img = 'https://picsum.photos/640/640?r=2r=' + Math.random();
}
