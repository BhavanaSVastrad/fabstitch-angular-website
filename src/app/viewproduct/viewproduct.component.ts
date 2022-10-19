import { Component, Input, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ViewService } from '../view.service';
import { Product } from '../product';
import { CartService } from '../cart.service';
import { Cartitem } from '../cartitem';
import Swal from 'sweetalert2';
// import { UserService } from '../user.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  constructor(private api:ViewService,private route:ActivatedRoute,
    private cartsvc:CartService, private router:Router) { }
  cart:Cartitem={
    id:0,
    pname:'',
    pdesc:'',
    price:0,
   
    img:'',
    quantity:1,
    totalPrice:1  ,
    subtotal:1  
  }
  quantity:number=1;
  // auth:boolean=false;

  addToCart(product:any){
    // if(this.auth){
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

    Toast.fire({
      icon: 'success',
      title: 'Item added successfully'
    })
    this.cartsvc.getCount();
  
 
  }
  //Input Class Decorator
  @Input()product:any


  productData: any;
  productId!:number;
  products:any[] =[];



  ngOnInit(): void {
    this.route.params.subscribe((params: { [x: string]: number; })=>{
      this.productId=params['id']
    })
    this.api.getProductsById(this.productId).subscribe(products=>{
      this.productData=products as Product
    })

    // this.authService.authSubject.subscribe(
    //   data => 
    //   {
    //     console.log('auth inside nav component: ' + data);
    //     this.auth = data;
    //   }
    // );


    // this.api.getProductDetails().subscribe(
    //   (response) =>
    //   {
    //     this.products = response
    //   },

    //   (error) =>
    //   {
    //     console.log("Error Occured: "+error );

    //   }

    // )
  }

}