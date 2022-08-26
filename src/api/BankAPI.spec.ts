import { APIRequester } from './APIRequester';
import { BankAPI } from './BankAPI';
import {accountBob, nodeUrl} from "../constants/testData";

const c = new APIRequester(nodeUrl);
const bank = new BankAPI(c);

describe('BankAPI', () => {
  describe('balance', () => {
    it('account exists', async () => {
      const account = await bank.allBalances(accountBob);
      console.log(JSON.stringify(account));
    });

    it('invalid account', async () => {
      await expect(bank.allBalances('1234')).rejects.toThrow();
    });
  });
});
