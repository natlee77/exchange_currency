import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CurrencyapidataService {

  constructor(private http: HttpClient) { }

    getcurrencyapidata(country1:string ){
      let url = 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=5'
      // 'https://api.exchangerate.host/latest?base=' + country1
      return this.http.get(url);
    }

  }

    //https://api.exchangerate.host/latest?base=UAH
    // https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11
