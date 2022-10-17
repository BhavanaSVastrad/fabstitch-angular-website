import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  formValue!: FormGroup;

  productData!: any;
  showAdd!: boolean;
  showUpdate!: boolean;
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      firstname:[''],
      lastname:[''],
      companyname:[''],
      email:[''],
      phone:[''],
      address:[''],
      city:[''],
      zip:[''],
      date:[''],
      time:[''],
    
    });
   

}
}
