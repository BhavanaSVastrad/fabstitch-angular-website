
import { Component, OnInit } from '@angular/core';
//Add to cart - cart items
import { Cartitem } from '../cartitem';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
//npm install sweetalert2
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.css']
})
export class CartItemsComponent implements OnInit {

  // quanties: number = 0;
  //constructor injection
  constructor(private cartSvc: CartService, private router:Router) { }
  //Cart List
  carts:Cartitem={
    id:0,
    pname:'',
    pdesc:'',
    price:0,
    img:'',
    quantity:1,
    totalPrice:1 ,
    subtotal:1   
  }
/*
  addToCart(product:any){
    this.cart.pname=product.pname;
    this.cart.pdesc=product.pdesc;
    this.cart.price=product.price;
    this.cart.img=product.img;
    this.cart.price=product.price;
    this.cart.totalPrice=product.totalPrice;
    this.cart.quantity=this.quantity;
    this.cart.id=product.id;
    this.cartsvc.addToCart(this.cart);
    console.log(product.id);
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    })
    */
  // quanties:number=0;
  cartData: any = [];
  totalprice: number = 0;
  //quantity = 1;
  cartData1: any = [];
  // subtotal: number = 0;
  quantity:number=0;
  //quantity1 = 1;
  //@Input() count?:number;

  
 
  // receivequantity($event: number) {
  //   this.quantity = $event;
  // }
  // totalPrices(data: any) {
  //   debugger
  //   this.totalprice = 0;
  //   this.cartData = data
  //   console.log(this.cartData);
  //   for (let j = 0; j < data.length; j++) {
  //     this.totalprice += (this.cartData[j].price + this.cartData[j].quantity)
  //     console.log(this.cartData[j].quantity)
  //   }
  //   return this.totalprice;
  // }

  subtotal(data: any) {
    debugger
    const intialValue = 0;
    this.cartData = data
    const a = this.cartData.reduce((sum: any, item: any) =>  (item.price * item.quantity), intialValue);
    return a;
  }

  totalPrice(data: any) {
    debugger
    const intialValue = 0;
    this.cartData = data
    const a = this.cartData.reduce((sum: any, item: any) => sum + (item.price * item.quantity), intialValue);
    return a;
  }
  cart: Cartitem[] = [];
  // updateToCart(cart: Cartitem) {
  //   console.log(this.quantity)
  //   this.carts.id = cart.id;
  //   this.carts.totalPrice=(cart.price * this.quantity);
  //   this.carts.quantity = this.quantity;
  //   this.cartSvc.updateCart(this.cart).subscribe(
  //     () => console.log("update successfully")
  //   )
  //   this.ngOnInit();
  // }
  delete(deleteItem: Cartitem) {
    this.cartSvc.removeItemFromCart(deleteItem).subscribe(
      () => console.log(deleteItem.pname)      
    );
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    })

    Toast.fire({
      icon: 'error',
      title: 'Item deleted successfully'
    })
    this.ngOnInit();
  }
  onClick(){
    this.router.navigate(['bookstitch'])
  }
  ngOnInit(): void {
    this.cartSvc.getCartItems().subscribe(
      (response) => {
        this.cart = response;
        console.log(this.cart);
      }
    )
  }
}