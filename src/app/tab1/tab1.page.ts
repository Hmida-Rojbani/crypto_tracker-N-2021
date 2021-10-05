import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CryptoCoin } from '../models/crypto-coin';
import { CoingeckoConsumerService } from '../services/coingecko-consumer.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  bitcoin$: CryptoCoin;
  fiats =  ['USD','EUR','GBP','JPY'];
  selectedFiat = 'USD';
  constructor(private coinProvider: CoingeckoConsumerService, private decPipe: DecimalPipe) {}

  ngOnInit(){
    this.getData();
  }

  callService(){
    return this.coinProvider.getCoinInfo(this.selectedFiat,'bitcoin').toPromise();
  }

  async getData(){
    const tab = await this.callService();
    this.bitcoin$ = tab[0];
    this.bitcoin$.selectedFiat=this.selectedFiat;
    const price_change_percentage_24h= this.decPipe.transform(this.bitcoin$.price_change_percentage_24h,'1.2');
    if(this.bitcoin$.price_change_percentage_24h>0){
      this.bitcoin$.bgCardColor= '#90EE90';
      this.bitcoin$.pricePersSentence=`Price is increased by ${price_change_percentage_24h} % in the last 24 Hours.`;
    } else{
      this.bitcoin$.bgCardColor= '#FF7F7F';
      this.bitcoin$.pricePersSentence=`Price is decreased by ${price_change_percentage_24h} % in the last 24 Hours.`;
    }
  }

  changeFiat(){
    this.bitcoin$=null;
    this.getData();
  }


}
