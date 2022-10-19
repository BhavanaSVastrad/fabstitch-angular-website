import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewService } from '../view.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


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


}