import * as StellarSDK from "stellar-sdk";
const server = new StellarSDK.Server("https://horizon-testnet.stellar.org");
import IState from "../../ui/state/state";

import { signAlbedo } from "../../wallets/albedo/albedo";
import { signXbull } from "../../wallets/xbull/xbull";
import { signFreighter } from "../../wallets/freighter/freighter";

export const submitTx = async (state: IState) => {
  let signedXdr;

  switch (state.wallet) {
    case (state.wallet = "freighter"):
      signedXdr = await signFreighter(state);
      break;
    case (state.wallet = "albedo"):
      signedXdr = await signAlbedo(state);
      break;
    case (state.wallet = "xbull"):
      signedXdr = await signXbull(state);
    default:
      state.wallet = "";
  }

  const newTx = StellarSDK.TransactionBuilder.fromXDR(signedXdr, "TESTNET");

  server.submitTransaction(newTx).then((res) => console.log(res));
};
