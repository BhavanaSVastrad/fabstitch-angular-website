import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
//import { UserService } from '../user.service';
//npm install sweetalert2
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public loginForm!:FormGroup
  //Authenticate user details from userapi
  userapi=environment.userapi;
  
  submitted = false;
  get f() { return this.loginForm.controls; }
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      useremail: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      firstname: ['', [Validators.required, Validators.minLength(20)]],
      lastname: ['', [Validators.required, Validators.minLength(20)]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required, Validators.maxLength(30)]],
      town: ['', [Validators.required, Validators.maxLength(20)]],
      postcode: ['', [Validators.required, Validators.maxLength(6)]],
      terms: ['', [Validators.required, Validators.requiredTrue]],
      pay: ['', [Validators.required, Validators.requiredTrue]]

        });
  }

  login(){
    this.submitted = true;
    if (this.loginForm.invalid) {
      return ;
    }
    this.http.get<any>(this.userapi)
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.useremail === this.loginForm.value.useremail && a.password=== this.loginForm.value.password
      });
      if(user){
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        })
    
        Toast.fire({
          icon: 'success',
          title: 'Login Successful'
        })
        this.loginForm.reset();
        this.router.navigate([''])
        //this.userService.validateAuth(true);
      }else{
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        })
    
        Toast.fire({
          icon: 'error',
          title: 'User not found'
        })       
        //this.userService.validateAuth(false);
      }
    })
  }


}
