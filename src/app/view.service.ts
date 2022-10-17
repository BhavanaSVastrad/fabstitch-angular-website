import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Product } from './product';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ViewService {
  url: string = ""
  producturl = environment.productapi;
  constructor(private http:HttpClient) { }

  getProductDetails(){
    return this.http.get<any>(this.producturl).pipe(map((res:any)=>{
      return res;
    }))
  }
  getProductsById(id: number) {
    return this.http.get<Product>(this.producturl+'/'+ '?id=' + id);
  }


}