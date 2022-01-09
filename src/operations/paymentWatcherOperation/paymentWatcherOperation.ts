import * as StellarSdk from "stellar-sdk";
import IState from "../../ui/state/state";

const server = new StellarSdk.Server("https://horizon-testnet.stellar.org");

export const paymentWatcherOperation = async (state: IState) => {
  try {
    const response = await server
      .payments()
      .forAccount(state.publicKey)
      .call()
      .then((res) => {
        const txHistory = res.records[1];
        return txHistory;
      });
    console.log(response);
    return response;
  } catch (error) {
    console.log("Oops, something went wrong!", error);
  }
};
