import { getPublicKey } from "@stellar/freighter-api";
import IState from "../../ui/state/state";

const GotPublicKey = (state: IState, res: any) => ({
  ...state,
  wallet: "freighter",
  publicKey: res,
});

export const inicializarFreighter = (state: IState, publicKey: string) => {
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
