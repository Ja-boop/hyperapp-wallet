import { getPublicKey, signTransaction } from "@stellar/freighter-api";
import IState from "../../ui/state/state";
import { buildTx } from "../../operations/txOperation/buildTxOperation";

const GotPublicKey = (state: IState, res: any) => ({
  ...state,
  wallet: "freighter",
  publicKey: res,
});

const destination = "GAVPIQ5RZCTNXWB5257PEQEZUBUKE37RQ4ZGDCNZPTKK3KLXGVIP2DBJ";

export const signFreighter = async (state: IState) => {
  const txXDR = await buildTx(state, destination);

  const signedTx = await signTransaction(txXDR.toXDR(), "TESTNET");

  return signedTx;
};

export const initFreighter = (state: IState, publicKey: string) => {
  const getPublicKeyFreighter = () => [
    { ...state, publicKey },

    [
      async (dispatch: Function) => {
        await getPublicKey().then((res) => {
          dispatch(GotPublicKey, res);
        });
      },
    ],
  ];

  return getPublicKeyFreighter();
};
