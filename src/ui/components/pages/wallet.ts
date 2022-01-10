import html from "hyperlit";
import ITxHistory from "../../state/payment";
import { showHistory } from "../../../wallets/freighter/freighter";
import { renderBalanceInfo } from "../../actions/actions";

const walletPage = (props: {
  wallet: string;
  publicKey: string;
  balance: string;
  paymentHistory: ITxHistory;
  paymentFunction: Function;
  renderBalanceInfo: Function;
}) => html` <div>${props.wallet} publicKey: ${props.publicKey}</div>
  <button onclick=${props.paymentFunction}>Make a Payment</button>
  <button onclick=${showHistory}>Show Transaction History</button>
  <button onclick=${renderBalanceInfo}>View your balance</button>
  <div>Your balance is ${props.balance} XLM</div>
  <div>
    <h1>Transaction History</h1>
    <p>Transaction Type: ${props.paymentHistory.type}</p>
    <p>To: ${props.paymentHistory.to}</p>
    <p>From: ${props.paymentHistory.from}</p>
    <p>Created At: ${props.paymentHistory.created_at}</p>
    <p>Asset type: ${props.paymentHistory.asset_type}</p>
    <p>Source Account: ${props.paymentHistory.source_account}</p>
    <p>Amount Transaction: ${props.paymentHistory.amount}</p>
    <p>Amount: ${props.paymentHistory.amount}</p>
  </div>
  ${console.log(props.paymentHistory.amount)}`;

export default walletPage;
