import { app } from "hyperapp";
import html from "hyperlit";
import IState from "./ui/state/state";
import walletPage from "./ui/components/pages/wallet";
import { getPublicKey } from "./wallets/albedo/albedo";
import { getPublicKeyFreighter } from "./wallets/freighter/freighter";

const baseState: IState = {
  publicKey: "",
  wallet: "",
};

app({
  init: baseState,
  view: (state: IState) =>
    html`<div>
      ${state.wallet
        ? walletPage({ wallet: state.wallet, publicKey: state.publicKey })
        : html`<ul>
            <button onclick=${getPublicKey}>Connect with Albedo</button>
            <button onclick=${getPublicKeyFreighter}>
              Connect with Freighter
            </button>
            <button
              onclick=${() => ({
                ...state,
                wallet: "xbull",
              })}
            >
              Connect with xBull
            </button>
          </ul>`}
    </div>`,
  node: document.getElementById("app")!,
});
