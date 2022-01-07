import { app } from "hyperapp";
import html from "hyperlit";
import IState from "./ui/state/state";
const baseState: IState = {
  publicKey: "",
  wallet: "",
};
app({
  init: baseState,
  view: (state: IState) =>
    html`<div>
      ${state.wallet
        ? html`<div>hola mundo</div>`
        : html`<ul>
            <button>Connect with Albedo</button
            ><button>Connect with Freighter</button
            ><button>Connect with xBull</button>
          </ul>`}
    </div>`,
  node: document.getElementById("app")!,
});
