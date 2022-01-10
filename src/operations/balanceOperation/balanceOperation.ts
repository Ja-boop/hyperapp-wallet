import StellarSDK from "stellar-sdk";
import IState from "../../ui/state/state";

const server = new StellarSDK.Server("https://horizon-testnet.stellar.org");

// Note: this solution trusts the accounts asset codes alone.
// For general accounts you may need to verify the issuing account id: b.asset_issuer
// const getBalance = (account: IAccount, currency: string, state: IState) => {
//   let balance = 0;
//   balance =
//     currency == "XLM"
//       ? Number.parseFloat(
//           account.balances.find(
//             (b: { asset_type: string }) => b.asset_type == "native"
//           ).balance
//         )
//       : Number.parseFloat(
//           account.balances.find(
//             (b: { asset_code: string }) => b.asset_code == currency
//           ).balance
//         );
//   return balance;
// };
export default async function getBalance(publicKey: string) {
  const response = await server.loadAccount(publicKey).then((account: any) => {
    const balance = account.balances[0].balance;
    return balance;
  });
  return response.toString();
}
