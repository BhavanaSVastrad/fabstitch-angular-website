import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Review } from '../review';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  reviewurl = environment.reviewapi;
  
  ReviewForm = new FormGroup({
    name: new FormControl(''),
    data: new FormControl(''),
    rating:new FormControl(''),
    email:new FormControl(''),
  })

  review:Review={
    id: 0,
    name:'',
    data:'',
    rating:4  
  }

  r: Review[] = [];

  submitted = false;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private revservice:ReviewService) { }

  ngOnInit(): void {
    this.ReviewForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[A-Za-z]*')]],
      data: ['', [Validators.required]],
      email:['',[Validators.required]]
    });

    this.revservice.getreview().subscribe(
      (response) => {
        this.r = response;
        console.log(this.r);
      }
    )

  }
  get f() { return this.ReviewForm.controls; }
  
  submitHandler() {
    this.submitted = true;
    if (this.ReviewForm.invalid) {
      return;
    }

    this.http.post<any>(this.reviewurl, this.ReviewForm.value)
      .subscribe(res => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        })
    
        Toast.fire({
          icon: 'success',
          title: 'Thanks for review'
        })
        this.ReviewForm.reset();

        this.revservice.getreview().subscribe(
          (response) => {
            this.r = response;
            console.log(this.r);
          }
        )
  
      })

  }


}