import { app } from "hyperapp";
import html from "hyperlit";
import IState from "./ui/state/state";
import components from "./ui/components/component";

const baseState: IState = {
  publicKey: "",
  wallet: "",
};

app({
  init: baseState,
  view: (state: IState) =>
    html`<div>
      ${state.wallet
        ? components[state.wallet]
        : html`<ul>
            <button
              onclick=${() => ({
                ...state,
                wallet: "albedo",
              })}
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
