import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Review } from './review';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { 
    this.url = this.reviewurl + "/";
  }

  url: string = ""
  reviewurl = environment.reviewapi;

  addreview(review: Review) {
  
    this.http.post<Review>(this.reviewurl, review).subscribe(data => {
      console.log(review)
    })
  }
  getreview() {
    return this.http.get<Review[]>(this.reviewurl);
  }

  removereview(item: any) {

    return this.http.delete(this.url + item.id)
  }
}