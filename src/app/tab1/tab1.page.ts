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
  constructor(private coinProvider: CoingeckoConsumerService) {}

  async ngOnInit(){
    const tab = await this.callService();
    this.bitcoin$ = tab[0];
  }

  callService(){
    return this.coinProvider.getCoinInfo().toPromise();
  }

}
