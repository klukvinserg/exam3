import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})

export class ShopListComponent implements OnInit, AfterViewInit, OnDestroy {

  restList: any;

  constructor(private shopServise: ShopService) { }

  ngOnInit(): void {

    this.restList = this.shopServise.getDataFromLocalStorage();

    if (this.restList === null) {
       this.shopServise.getDataFromJson().subscribe(res => {
          localStorage.setItem('data', JSON.stringify(res));
          this.restList = this.shopServise.getDataFromLocalStorage();
       });
    }
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
  }

}
