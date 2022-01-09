import html from "hyperlit";
import IPayment from "../../state/payment";

const walletPage = (props: {
  wallet: string;
  publicKey: string;
  balance: string;
  paymentHistory: IPayment[];
  paymentFunction: Function;
}) => html`<div>${props.wallet} publicKey: ${props.publicKey}</div>
  <div>${props.balance}</div>
  <div>${props.paymentHistory}</div>
  <button onclick=${props.paymentFunction}>Make a Payment</button>`;

export default walletPage;
