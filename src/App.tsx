import { app } from "hyperapp";
import html from "hyperlit";
import withRouter from "@mrbarrysoftware/hyperapp-router";
import IState from "./ui/state/state";

const baseState: IState = {
  viewFn: () => html`<div></div>`,
};

withRouter(app)({
  router: {
    disableAnchorCapture: true,
    routes: {
      "/": {
        OnEnter: (state: IState) => ({
          ...state,
          viewFn: () => {
            return html`<div>
              <ul>
                <button><a href="/xbull">Connect with xBull</a></button>
                <button><a href="/albedo">Connect with Albedo</a></button>
                <button><a href="/freighter">Connect with Freighter</a></button>
              </ul>
            </div>`;
          },
        }),
      },
      "/xbull": {
        OnEnter: (state: IState) => ({
          ...state,
          viewFn: () => {
            return html`<div>XBULL</div>`;
          },
        }),
      },
      "/albedo": {
        OnEnter: (state: IState) => ({
          ...state,
          viewFn: () => html`<div>ALBEDO</div>`,
        }),
      },
      "/freighter": {
        OnEnter: (state: IState) => ({
          ...state,
          viewFn: () => html`<div>FREIGHTER</div>`,
        }),
      },
    },
  },

  init: baseState,
  view: (state: IState) => state.viewFn(),

  node: document.getElementById("app"),
});
