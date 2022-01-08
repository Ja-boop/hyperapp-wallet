import IState from "../../ui/state/state";

export const getPublicKeyXBull = (state: IState, publicKey: string) => [
  { ...state, publicKey },

  [
    async (dispatch: Function) => {
      try {
        await xBullSDK.getPublicKey().then((res: any) => {
          dispatch(GotPublicKey, res);
        });
      } catch (error) {
        alert("You need to install the xBull extension");
      }
    },
  ],
];

const GotPublicKey = (state: IState, res: any) => ({
  ...state,
  wallet: "xbull",
  publicKey: res,
});
