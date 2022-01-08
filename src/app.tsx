import { app } from "hyperapp";
import html from "hyperlit";
import IState from "./ui/state/state";
import walletPage from "./ui/components/pages/wallet";
import { initAlbedo } from "./wallets/albedo/albedo";

import { initFreighter } from "./wallets/freighter/freighter";

import { initXbull } from "./wallets/xbull/xbull";

const baseState: IState = {
  publicKey: "",
  wallet: "",
  balance: "",
  paymentHistory: [],
};

app({
  init: baseState,
  view: (state: IState) =>
    html`<div>
      ${state.wallet
        ? walletPage({
            wallet: state.wallet,
            publicKey: state.publicKey,
            balance: state.balance,
            paymentHistory: state.paymentHistory,
          })
        : html`<ul>
            <button onclick=${initAlbedo}>Connect with Albedo</button>
            <button onclick=${initFreighter}>Connect with Freighter</button>
            <button onclick=${initXbull}>Connect with xBull</button>
          </ul>`}
    </div>`,
  node: document.getElementById("app")!,
});
