import albedo from "@albedo-link/intent";
import IState from "../../ui/state/state";

export const getPublicKey = (state: IState) => {
  try {
    albedo
      .publicKey({
        token: "FJbsCy6x99qIIJQAForNJTgEpOoFahKv0CnWTcH5qu8=",
      })
      .then((res) => {
        return { ...state, publicKey: res.pubkey };
      });
  } catch (e) {
    console.log(e);
  }
};
