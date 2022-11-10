import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder, FormsModule } from '@angular/forms';
import { CurrencyapidataService } from '../currencyapidata.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})


export class HomeComponent implements OnInit  {

bases=['UAH','USD','EUR'];
  slcform=new FormGroup({
     base : new FormControl(  ),
     cont2: new FormControl( )
  })
  currjson: any=[];
  base: any=' ';
  cont2: any = ' '  ;
  result: any=[];
  amount: any=[];
  price: any=[];
  public selectedbase=".";
  public selectedcont2=".";
    changebase(event: any){
         this.base = this.selectedbase;
            // console.log('base :', this.base)
    }

  tocounty(event:any){
    this.cont2 = this.selectedcont2 ;
    //  console.log('cont2 : ',this.cont2)
  }
  amounts(c: string ){
    this.amount = c;
    this.result=0;
    // console.log('amount: ',this.amount)
  }
  constructor(private currency: CurrencyapidataService) {
  }
  swap(){
   let  arr=[this.selectedbase,this.selectedcont2];
    [[this.selectedbase],[this.selectedcont2]]=[[this.selectedcont2],[this.selectedbase]]
    this.result=this.convert()

  }
  convert(){
    this.currency.getcurrencyapidata(this.base).subscribe(data =>{
      // console.log(data)
       this.currjson=JSON.stringify(data);
        //  console.log(this.currjson)
       this.currjson= JSON.parse(this.currjson)
         console.log(this.currjson )

       if (this.base== "USD"  )  {
         if (this.cont2=='EUR'){
          this.price  = this.currjson[0].buy
          this.result =(this.amount * this.price / this.currjson[1].sale).toFixed(2)
          console.log(this.result)
        }
        if (this.cont2=='UAH' ){
          this.price = this.currjson[0].buy
          this.result =(this.price * this.amount).toFixed(2)
          console.log(this.result)
        }

      }

      if (this.base== "EUR"  )  {
        if (this.cont2=='USD'){
         this.price  = this.currjson[1].buy
         this.result =(this.amount * this.price / this.currjson[0].sale).toFixed(2)
         console.log(this.result)
       }
       if (this.cont2=='UAH' ){
         this.price = this.currjson[1].buy
         this.result = (this.price * this.amount).toFixed(2)
         console.log(this.result)
       }
      }

      if (this.base== "UAH"  )  {
          if (this.cont2=='EUR'){
            this.price  = this.currjson[1].sale
            this.result =(this.amount / this.price).toFixed(2)
            console.log(this.result)
          }
          if (this.cont2=='USD' ){
            this.price = this.currjson[0].sale
            this.result =   ( this.amount /this.price).toFixed(2)
            console.log(this.result)
          }
        }
       if (this.base==this.cont2){
        this.result=  this.amount
       }


    })

  }
  ngOnInit(): void {  }
}



