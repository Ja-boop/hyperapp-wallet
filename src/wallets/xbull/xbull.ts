import IState from "../../ui/state/state";
declare const window: any;

const GotPublicKey = (state: IState, res: any) => ({
  ...state,
  wallet: "xbull",
  publicKey: res,
});

export const inicializarXbull = (state: IState, publicKey: string) => {
  const getPublicKeyXBull = () => [
    { ...state, publicKey },

    [
      async (dispatch: Function) => {
        try {
          await window.xBullSDK.getPublicKey().then((res: any) => {
            dispatch(GotPublicKey, res);
          });
        } catch (error) {
          alert("You need to install the xBull extension");
        }
      },
    ],
  ];

  return getPublicKeyXBull();
};
