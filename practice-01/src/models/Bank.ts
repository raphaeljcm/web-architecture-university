import fs from 'node:fs';

type Bank = {
  ShortName: string;
  COMPE: string;
  Document: string;
  Type: string;
  Url: string;
};

export const Bank = () => {
  const banks = fs.readFileSync('./src/data/banks.json', 'utf8');
  const parsedBanks = JSON.parse(banks).slice(0, 5);
  return parsedBanks.map((bank: Bank) => ({
    shortName: bank.ShortName,
    compe: bank.COMPE,
    document: bank.Document,
    type: bank.Type,
    url: bank.Url,
  }));
};
