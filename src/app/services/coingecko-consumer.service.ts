import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CryptoCoin } from '../models/crypto-coin';

@Injectable({
  providedIn: 'root'
})
export class CoingeckoConsumerService {

  constructor(private httpClient: HttpClient) { }

  getCoinInfo(){
    const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&ids=bitcoin';
    return this.httpClient.get<CryptoCoin[]>(URL);
  }
}
