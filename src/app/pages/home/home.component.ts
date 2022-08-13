import { OrderDetailsService } from './../../services/order-details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:OrderDetailsService) { }
  foodDate:any;


  ngOnInit(): void {
    this.foodDate=this.service.foodDetails;
  }

}
