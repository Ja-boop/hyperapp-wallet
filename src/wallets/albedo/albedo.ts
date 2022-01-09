import albedo from "@albedo-link/intent";
import IState from "../../ui/state/state";
import { buildTx } from "../../operations/txOperation/buildTxOperation";
import { paymentWatcherOperation } from "../../operations/paymentWatcherOperation/paymentWatcherOperation";

const GotPublicKey = (state: IState, res: any) => ({
  ...state,
  wallet: "albedo",
  publicKey: res.pubkey,
});

const updateTxHistoryState = (state: IState, res: any) => ({
  ...state,
  paymentHistory: res,
});

export const signAlbedo = async (state: IState) => {
  const destination =
    "GAVPIQ5RZCTNXWB5257PEQEZUBUKE37RQ4ZGDCNZPTKK3KLXGVIP2DBJ";
  const txXDR = await buildTx(state, destination);
  const signedTx = await albedo.tx({ xdr: txXDR.toXDR(), network: "testnet" });

  return signedTx.signed_envelope_xdr;
};

export const initAlbedo = (state: IState, publicKey: string) => {
  const getPublicKey = () => [
    { ...state, publicKey },

    [
      async (dispatch: Function) => {
        await albedo.publicKey({}).then((res) => {
          dispatch(GotPublicKey, res);
        });
      },
    ],
  ];

  return getPublicKey();
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
