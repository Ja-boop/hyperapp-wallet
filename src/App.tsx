import { app, h, text } from "hyperapp";
import html from "hyperlit";
import withRouter, { effects } from "@mrbarrysoftware/hyperapp-router";

const GoToHref = (state: any, { href }: any) => [
  state,
  effects.Navigate({ href }), //where href is a string, like `/route/path/here`
];

withRouter(app)({
  router: {
    routes: {
      "/": {
        OnEnter: (state: any) => ({
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
        OnEnter: (state: any) => ({
          ...state,
          viewFn: () => {
            return html`<div>XBULL</div>`;
          },
        }),
      },
      "/albedo": {
        OnEnter: (state: any) => ({
          ...state,
          viewFn: () => html`<div>ALBEDO</div>`,
        }),
      },
      "/freighter": {
        OnEnter: (state: any) => ({
          ...state,
          viewFn: () => html`<div>FREIGHTER</div>`,
        }),
      },
    },
  },

  init: { viewFn: () => html`<div></div>` },

  view: (state: any) => state.viewFn(),

  node: document.getElementById("app"),
});
