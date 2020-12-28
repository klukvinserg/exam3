import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../shop/shop.service';


type NewType = number;

@Component({
  selector: 'app-customer-b',
  templateUrl: './customer-b.component.html',
  styleUrls: ['./customer-b.component.scss']
})
export class CustomerBComponent implements OnInit {

  constructor(private cartService: ShopService) {}

  cartArr: any;
  cartDataFromLocalSt: any;
  totalPrice: NewType = 0;

  ngOnInit(): void {
    const tmp = JSON.parse(localStorage.getItem('dataCart'));
    this.cartDataFromLocalSt = tmp;

    if (this.cartDataFromLocalSt !== null) {

      this.cartDataFromLocalSt.forEach(el => {

        this.totalPrice = this.totalPrice + (el.price * el.quantity);

      });

    }

    if ( this.totalPrice === 0) {
      $('.buy-button').addClass('d-none');
      $('.total').addClass('d-none');
    } else {
      $('.buy-button').removeClass('d-none');
      $('.total').removeClass('d-none');
    }
  }

  deleteElCart(event) {

    const select = +event.target.attributes[3].value;

    const tmp = JSON.parse(localStorage.getItem('dataCart'));

    const temp = JSON.parse(localStorage.getItem('data'));

    const index = tmp.findIndex(n => n.id === select);

    temp[index].quantity = temp[index].quantity + tmp[index].quantity;

    if (index !== -1) {
      tmp.splice(index, 1);
    }

    localStorage.setItem('dataCart', JSON.stringify(tmp));
    localStorage.setItem('data', JSON.stringify(temp));

    this.totalPrice = 0;

    this.ngOnInit();

  }

  buyFunc() {
    this.totalPrice = 0;
    localStorage.setItem('dataCart', JSON.stringify([]));
    this.ngOnInit();
  }

}
