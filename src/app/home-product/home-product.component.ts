
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewService } from '../view.service';

@Component({
  selector: 'app-home-product',
  templateUrl: './home-product.component.html',
  styleUrls: ['./home-product.component.css']
})
export class HomeProductComponent implements OnInit {


  constructor(private viewService:ViewService) { }
  productsL:any[] =[];
  ngOnInit(): void {
    this.viewService.getProductDetails().subscribe(
      (response) =>
      {
        this.productsL = response
      },

      (error) =>
      {
        console.log("Error Occured: "+error );

      }

    )
  }

  // products:any=(prod as any).default;

  // options(product:any){
  //   // this.router.navigate(['/products'])
  // }

}