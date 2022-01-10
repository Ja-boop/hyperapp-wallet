import StellarSDK from "stellar-sdk";

const server = new StellarSDK.Server("https://horizon-testnet.stellar.org");

export default async function getBalance(publicKey: string) {
  const response = await server.loadAccount(publicKey).then((account: any) => {
    const balance = account.balances[0].balance;
    return balance;
  });
  return response.toString();
}
