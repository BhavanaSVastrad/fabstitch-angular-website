import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  
  prod:products=new products();
  prod_array:string[]=['blue','shadow']
  ngOnInit(): void {
  }

}
class products
{
  blue:boolean=true;
  shadow:boolean=true;
  size:boolean=true;
}