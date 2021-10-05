import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CryptoCoin } from '../models/crypto-coin';
import { CoingeckoConsumerService } from '../services/coingecko-consumer.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit{

  ripple$: CryptoCoin;
  fiats =  ['USD','EUR','GBP','JPY'];
  selectedFiat = 'USD';
  constructor(private coinProvider: CoingeckoConsumerService, private decPipe: DecimalPipe) {}

  ngOnInit(){
    this.getData();
  }

  callService(){
    return this.coinProvider.getCoinInfo(this.selectedFiat,'ripple').toPromise();
  }

  async getData(){
    const tab = await this.callService();
    this.ripple$ = tab[0];
    this.ripple$.selectedFiat=this.selectedFiat;
    const price_change_percentage_24h= this.decPipe.transform(this.ripple$.price_change_percentage_24h,'1.2');
    if(this.ripple$.price_change_percentage_24h>0){
      this.ripple$.bgCardColor= '#90EE90';
      this.ripple$.pricePersSentence=`Price is increased by ${price_change_percentage_24h} % in the last 24 Hours.`;
    } else{
      this.ripple$.bgCardColor= '#FF7F7F';
      this.ripple$.pricePersSentence=`Price is decreased by ${price_change_percentage_24h} % in the last 24 Hours.`;
    }
  }

  changeFiat(){
    this.ripple$=null;
    this.getData();
  }

}
