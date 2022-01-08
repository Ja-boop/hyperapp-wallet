import { app } from "hyperapp";
import html from "hyperlit";
import IState from "./ui/state/state";
import walletPage from "./ui/components/pages/wallet";
import { getPublicKey } from "./wallets/albedo/albedo";

import { getPublicKeyFreighter } from "./wallets/freighter/freighter";

import { getPublicKeyXBull } from "./wallets/xbull/xbull";

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
            <button onclick=${getPublicKey}>Connect with Albedo</button>
            <button onclick=${getPublicKeyFreighter}>
              Connect with Freighter
            </button>
            <button onclick=${getPublicKeyXBull}>Connect with xBull</button>
          </ul>`}
    </div>`,
  node: document.getElementById("app")!,
});
