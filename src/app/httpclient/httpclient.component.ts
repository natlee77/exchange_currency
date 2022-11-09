

import { Component,  OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import {ExchangeRateService} from '../exchangerate.service';

// type from API privatbank
export type APIRateType = {
  map: any;
  ccy: string,
  base_ccy: string,
  buy: string,
  sale: string
}
// type for front
export type RateType = {
  ccy: string,
  base_ccy: string,
  buy: number,
  sale: number
}


@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.css'],
  // providers: [    ExchangeRateService  ],
})
export class HttpClientComponent implements OnInit {
    rates$!: Observable<RateType[]>;

    constructor(private currency: ExchangeRateService){
        this.rates$ =currency.getCurrentRate$();
    }
  ngOnInit(): void {
  }

}
