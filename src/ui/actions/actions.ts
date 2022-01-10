import IState from "../state/state";
import getBalance from "../../operations/balanceOperation/balanceOperation";

export const GotBalance = (state: IState, res: any) => ({
  ...state,
  balance: res,
});

export const renderBalanceInfo = (state: IState) => {
  const dispatchBalance = (state: IState, balance: string) => [
    { ...state, balance },
    [
      async (dispatch: Function) => {
        try {
          await getBalance(state.publicKey).then((res) => {
            dispatch(GotBalance, res);
          });
        } catch (error) {
          console.log(error);
        }
      },
    ],
  ];
  return dispatchBalance;
};
