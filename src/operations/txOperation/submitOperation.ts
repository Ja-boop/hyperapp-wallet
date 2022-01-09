import * as StellarSDK from "stellar-sdk";
const server = new StellarSDK.Server("https://horizon-testnet.stellar.org");
import IState from "../../ui/state/state";

import { signAlbedo } from "../../wallets/albedo/albedo";
import { signXbull } from "../../wallets/xbull/xbull";
import { signFreighter } from "../../wallets/freighter/freighter";

export const submitTx = async (state: IState) => {
  let signedXdr;

  state.wallet === "freighter" ? (signedXdr = await signFreighter(state)) : "";
  state.wallet === "albedo" ? (signedXdr = await signAlbedo(state)) : "";
  state.wallet === "xbull" ? (signedXdr = await signXbull(state)) : "";

  const newTx = StellarSDK.TransactionBuilder.fromXDR(signedXdr, "TESTNET");

  const result = server
    .submitTransaction(newTx)
    .then((res) => console.log(res));
  return result;
};
