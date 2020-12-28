import { Component, OnInit, Input } from '@angular/core';
import { ShopService } from '../shop.service';


@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss']
})
export class ShopCardComponent implements OnInit {

  constructor(private shopService: ShopService) { }

  @Input () item;

  data: any;
  cartData: any;


  ngOnInit(): void {

  }

  addToCart(quantity, event) {

    const q = +quantity;

    const select = +event.target.attributes[3].value;

    this.data = this.shopService.getDataFromLocalStorage();

    const findIndex = this.data.findIndex(o => o.id === select);

    this.data[findIndex].quantity = this.data[findIndex].quantity - q;

    const foundEl = this.data.find(element => element.id === select);


    const addProduct = {
      id: foundEl.id,
      title: foundEl.title,
      price: foundEl.price,
      quantity: q
    };


    this.cartData = JSON.parse(localStorage.getItem('dataCart'));

    if (this.cartData === null) {
      this.cartData = [addProduct];
    } else {

      const i = this.cartData.findIndex(o => o.id === foundEl.id);

      if (this.cartData[i]) {
        this.cartData[i].quantity = this.cartData[i].quantity + addProduct.quantity;
        } else {
          this.cartData.push(addProduct);
         }
    }

    this.item.quantity = this.item.quantity - q;

    if (this.item.quantity !== 0) {
      $(`#quantity${select}`).val('1');
    }

    localStorage.setItem('dataCart', JSON.stringify(this.cartData));
    localStorage.setItem('data', JSON.stringify(this.data));

  }
}
