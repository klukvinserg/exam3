import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shop } from 'src/app/models/shop';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ShopService {

  constructor(private http: HttpClient) { }


  getDataFromJson(): Observable<Shop[]>{
    return this.http.get<Shop[]>('assets/products.json');
  }

  getDataFromLocalStorage(): Observable<any> {
    return JSON.parse(localStorage.getItem('data'));
  }

}

