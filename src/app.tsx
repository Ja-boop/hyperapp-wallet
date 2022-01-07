import { app } from "hyperapp";
import html from "hyperlit";
import IState from "./ui/state/state";
import walletPage from "./ui/components/pages/wallet";
import { getPublicKey } from "./wallets/albedo/albedo";

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
            <button
              onclick=${() => {
                getPublicKey(state);
              }}
            >
              Connect with Albedo
            </button>
            <button
              onclick=${() => ({
                ...state,
                wallet: "freighter",
              })}
            >
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
