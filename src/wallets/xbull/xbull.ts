import IState from "../../ui/state/state";
declare const window: any;
import { buildTx } from "../../operations/txOperation/buildTxOperation";

const GotPublicKey = (state: IState, res: any) => ({
  ...state,
  wallet: "xbull",
  publicKey: res,
});

const destination = "GAVPIQ5RZCTNXWB5257PEQEZUBUKE37RQ4ZGDCNZPTKK3KLXGVIP2DBJ";

export const signXbull = async (state: IState) => {
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
