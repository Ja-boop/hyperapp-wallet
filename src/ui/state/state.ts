import IPayment from "./payment";

export default interface IState {
  publicKey: string;
  wallet: string;
  balance: string;
  paymentHistory: IPayment[];
}
