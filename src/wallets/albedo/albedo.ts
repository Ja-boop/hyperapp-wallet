import albedo from "@albedo-link/intent";
import IState from "../../ui/state/state";

const GotPublicKey = (state: IState, res: any) => ({
  ...state,
  wallet: "albedo",
  publicKey: res.pubkey,
});

export const inicializarAlbedo = (state: IState, publicKey: string) => {
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
