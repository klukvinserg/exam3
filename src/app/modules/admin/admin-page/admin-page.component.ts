import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../shop/shop.service';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  constructor(private adminService: ShopService, private http: HttpClient) { }

  adminPage: any;
  data: any;
  foundEl: any;
  upgradeId: number;
  titleControl: any;
  descriptionControl: any;
  priceControl: any;
  quantityControl: any;
  urlControl: any;
  titleControlUpgrade: any;
  descriptionControlUpgrade: any;
  priceControlUpgrade: any;
  quantityControlUpgrade: any;
  urlControlUpgrade: any;
  clearVal: any;

  ngOnInit(): void {

    this.adminPage = this.adminService.getDataFromLocalStorage();

    if (this.adminPage === null) {
       this.adminService.getDataFromJson().subscribe(res => {
          localStorage.setItem('data', JSON.stringify(res));
          this.adminPage = this.adminService.getDataFromLocalStorage();
       });
    }
  }

saveNewProduct(titleProduct, descriptionProduct, quantityProduct, priceProduct, urlProduct) {

 this.data = this.adminService.getDataFromLocalStorage();

 const max = this.data.reduce((acc, curr) => acc.id > curr.id ? acc : curr);

 const newProduct = {
     id: max.id + 1,
     img: urlProduct,
     title: titleProduct,
     description: descriptionProduct,
     quantity: +quantityProduct,
     price: +priceProduct
   };

 this.data.push(newProduct);

 localStorage.setItem('data', JSON.stringify(this.data));

 $('#btnSave').attr('disabled', 'disabled');

 this.ngOnInit();

 return false;

}

  deleteProduct(event) {

    const select = +event.target.attributes[3].nodeValue;

    this.data = this.adminService.getDataFromLocalStorage();

    const index = this.data.findIndex(n => n.id === select);

    if (index !== -1) {
      this.data.splice(index, 1);
    }

    localStorage.setItem('data', JSON.stringify(this.data));

    this.ngOnInit();

  }

  upgradeProduct(event) {

    this.upgradeId = +event.target.attributes[5].nodeValue;

    this.data = this.adminService.getDataFromLocalStorage();

    this.foundEl = this.data.find(element => element.id === this.upgradeId);

  }

  saveUpgradeProduct(titleProduct, descriptionProduct, quantityProduct, priceProduct, urlProduct) {

    this.data = this.adminService.getDataFromLocalStorage();

    const ugradeProductObj = {
     id: this.upgradeId,
     img: urlProduct,
     title: titleProduct,
     description: descriptionProduct,
     quantity: +quantityProduct,
     price: +priceProduct
    };

    const i = this.data.findIndex(o => o.id === ugradeProductObj.id);

    if (this.data[i]) { this.data[i] = ugradeProductObj; } else { this.data.push(ugradeProductObj); }

    localStorage.setItem('data', JSON.stringify(this.data));

    $('#btnSaveUpgrade').attr('disabled', 'disabled');

    this.ngOnInit();

    return false;
  }

  checkParams() {
    this.titleControl = $('#title').val();
    this.descriptionControl = $('#description').val();
    this.priceControl = $('#price').val();
    this.quantityControl = $('#quantity').val();
    this.urlControl = $('#url').val();

    if ((this.titleControl.length >= 3 && this.titleControl.trim().length >= 3)
      && (this.descriptionControl.length >= 3 && this.descriptionControl.trim().length >= 3)
         && (this.priceControl >= 1)
           && (this.quantityControl >= 1)
             && (this.urlControl.length >= 3 && this.urlControl.trim().length >= 3)) {
        $('.btnSave').removeAttr('disabled');
    } else {
        $('.btnSave').attr('disabled', 'disabled');
    }
  }

  checkParamsUpgrade() {
    this.titleControlUpgrade = $('#titleUpgrade').val();
    this.descriptionControlUpgrade = $('#descriptionUpgrade').val();
    this.priceControlUpgrade = $('#priceUpgrade').val();
    this.quantityControlUpgrade = $('#quantityUpgrade').val();
    this.urlControlUpgrade = $('#urlUpgrade').val();

    if ((this.titleControlUpgrade.length >= 3 && this.titleControlUpgrade.trim().length >= 3)
      && (this.descriptionControlUpgrade.length >= 3 && this.descriptionControlUpgrade.trim().length >= 3)
         && (this.priceControlUpgrade >= 1)
           && (this.quantityControlUpgrade >= 1)
             && (this.urlControlUpgrade.length >= 3 && this.urlControlUpgrade.trim().length >= 3)) {
        $('.btnSaveUpgrade').removeAttr('disabled');
    } else {
        $('.btnSaveUpgrade').attr('disabled', 'disabled');
    }
  }

  clearFunk() {
    $('#title').val('');
    $('#description').val('');
    $('#price').val('');
    $('#quantity').val('');
    $('#url').val('');
  }
}
