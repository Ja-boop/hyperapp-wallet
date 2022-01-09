import IState from "../../ui/state/state";
import { buildTx } from "../../operations/txOperation/buildTxOperation";
import { paymentWatcherOperation } from "../../operations/paymentWatcherOperation/paymentWatcherOperation";

declare const window: any;

const GotPublicKey = (state: IState, res: any) => ({
  ...state,
  wallet: "xbull",
  publicKey: res,
});

const updateTxHistoryState = (state: IState, res: any) => ({
  ...state,
  paymentHistory: res,
});

export const signXbull = async (state: IState) => {
  const destination =
    "GAVPIQ5RZCTNXWB5257PEQEZUBUKE37RQ4ZGDCNZPTKK3KLXGVIP2DBJ";
  const txXDR = await buildTx(state, destination);
  const signedTx = await window.xBullSDK.signXDR(txXDR.toXDR());

  return signedTx;
};

export const initXbull = (state: IState, publicKey: string) => {
  const getPublicKeyXBull = () => [
    { ...state, publicKey },

    [
      async (dispatch: Function) => {
        try {
          await window.xBullSDK.connect({
            canRequestPublicKey: true,
            canRequestSign: true,
          });
          await window.xBullSDK.getPublicKey().then((res: any) => {
            dispatch(GotPublicKey, res);
          });
        } catch (error) {
          alert(
            "You need to install the xBull extension or log in the extension with your account"
          );
        }
      },
    ],
  ];

  return getPublicKeyXBull();
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
