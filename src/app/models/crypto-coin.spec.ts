import { CryptoCoin } from './crypto-coin';

describe('CryptoCoin', () => {
  it('should create an instance', () => {
    expect(new CryptoCoin()).toBeTruthy();
  });
});
