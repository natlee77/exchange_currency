import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { APIRateType,  RateType } from './httpclient/httpclient.component';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {

  constructor(private httpClient: HttpClient){}

  getCurrentRate$(): Observable<RateType[]>   {
      return this.httpClient
          .get<APIRateType>('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
          .pipe(
              map(arrayRateFromAPI => arrayRateFromAPI.map((rateFromAPI: {
                ccy: string,
                base_ccy: string,
                buy: string,
                sale: string }) => ({
                 ccy: rateFromAPI.ccy,
                 base_ccy: rateFromAPI.base_ccy,
                 buy: Number(rateFromAPI.buy).toFixed(2),
                 sale: Number(rateFromAPI.sale).toFixed(2)
              }))),
              // take(1)
          );
  }


}
