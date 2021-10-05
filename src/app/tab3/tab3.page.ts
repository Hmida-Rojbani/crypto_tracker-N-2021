import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CryptoCoin } from '../models/crypto-coin';
import { CoingeckoConsumerService } from '../services/coingecko-consumer.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  dash$: CryptoCoin;
  fiats =  ['USD','EUR','GBP','JPY'];
  selectedFiat = 'USD';
  constructor(private coinProvider: CoingeckoConsumerService, private decPipe: DecimalPipe) {}

  ngOnInit(){
    this.getData();
  }

  callService(){
    return this.coinProvider.getCoinInfo(this.selectedFiat,'dash').toPromise();
  }

  async getData(){
    const tab = await this.callService();
    this.dash$ = tab[0];
    this.dash$.selectedFiat=this.selectedFiat;
    const price_change_percentage_24h= this.decPipe.transform(this.dash$.price_change_percentage_24h,'1.2');
    if(this.dash$.price_change_percentage_24h>0){
      this.dash$.bgCardColor= '#90EE90';
      this.dash$.pricePersSentence=`Price is increased by ${price_change_percentage_24h} % in the last 24 Hours.`;
    } else{
      this.dash$.bgCardColor= '#FF7F7F';
      this.dash$.pricePersSentence=`Price is decreased by ${price_change_percentage_24h} % in the last 24 Hours.`;
    }
  }

  changeFiat(){
    this.dash$=null;
    this.getData();
  }

}
