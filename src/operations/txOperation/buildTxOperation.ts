import * as StellarSDK from "stellar-sdk";
const server = new StellarSDK.Server("https://horizon-testnet.stellar.org");
import IState from "../../ui/state/state";

export const buildTx = async (state: IState, destination: string) => {
  const sourceAccount = await server.loadAccount(state.publicKey);

  let transaction;

  transaction = new StellarSDK.TransactionBuilder(sourceAccount, {
    fee: StellarSDK.BASE_FEE,
    networkPassphrase: StellarSDK.Networks.TESTNET,
  })
    .addOperation(
      StellarSDK.Operation.payment({
        destination: destination,
        asset: StellarSDK.Asset.native(),
        amount: "100",
      })
    )
    .addMemo(StellarSDK.Memo.text("Transaction test"))
    .setTimeout(180)
    .build();
  return transaction;
};
