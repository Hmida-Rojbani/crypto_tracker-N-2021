import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CryptoCoin } from '../models/crypto-coin';
import { CoingeckoConsumerService } from '../services/coingecko-consumer.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  ethereum$: CryptoCoin;
  fiats =  ['USD','EUR','GBP','JPY'];
  selectedFiat = 'USD';
  constructor(private coinProvider: CoingeckoConsumerService, private decPipe: DecimalPipe) {}

  ngOnInit(){
    this.getData();
  }

  callService(){
    return this.coinProvider.getCoinInfo(this.selectedFiat,'ethereum').toPromise();
  }

  async getData(){
    const tab = await this.callService();
    this.ethereum$ = tab[0];
    this.ethereum$.selectedFiat=this.selectedFiat;
    const price_change_percentage_24h= this.decPipe.transform(this.ethereum$.price_change_percentage_24h,'1.2');
    if(this.ethereum$.price_change_percentage_24h>0){
      this.ethereum$.bgCardColor= '#90EE90';
      this.ethereum$.pricePersSentence=`Price is increased by ${price_change_percentage_24h} % in the last 24 Hours.`;
    } else{
      this.ethereum$.bgCardColor= '#FF7F7F';
      this.ethereum$.pricePersSentence=`Price is decreased by ${price_change_percentage_24h} % in the last 24 Hours.`;
    }
  }

  changeFiat(){
    this.ethereum$=null;
    this.getData();
  }

}
