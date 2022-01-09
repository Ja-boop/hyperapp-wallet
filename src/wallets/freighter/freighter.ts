import { getPublicKey, signTransaction } from "@stellar/freighter-api";
import IState from "../../ui/state/state";
import { buildTx } from "../../operations/txOperation/buildTxOperation";
import { paymentWatcherOperation } from "../../operations/paymentWatcherOperation/paymentWatcherOperation";

const GotPublicKey = (state: IState, res: any) => ({
  ...state,
  wallet: "freighter",
  publicKey: res,
});

const updateTxHistoryState = (state: IState, res: any) => ({
  ...state,
  paymentHistory: res,
});

export const signFreighter = async (state: IState) => {
  const destination =
    "GAVPIQ5RZCTNXWB5257PEQEZUBUKE37RQ4ZGDCNZPTKK3KLXGVIP2DBJ";
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

export const showHistory = (state: IState, paymentHistory: []) => {
  const getHistoryFreighter = () => [
    { ...state, paymentHistory },
    [
      async (dispatch: Function) => {
        await paymentWatcherOperation(state).then((res) => {
          console.log(res);
          dispatch(updateTxHistoryState, res);
        });
      },
    ],
  ];
  return getHistoryFreighter;
};
