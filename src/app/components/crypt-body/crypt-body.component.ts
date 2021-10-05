import { Component, Input, OnInit } from '@angular/core';
import { CryptoCoin } from 'src/app/models/crypto-coin';

@Component({
  selector: 'app-crypt-body',
  templateUrl: './crypt-body.component.html',
  styleUrls: ['./crypt-body.component.scss'],
})
export class CryptBodyComponent implements OnInit {
  @Input() cryptoData: CryptoCoin;
  constructor() { }

  ngOnInit() {}

}
