import { app } from "hyperapp";
import html from "hyperlit";
import withRouter from "@mrbarrysoftware/hyperapp-router";
import IState from "./ui/state/state";
import components from "./ui/components/component";

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
            return components.homePage;
          },
        }),
      },
      "/xbull": {
        OnEnter: (state: IState) => ({
          ...state,
          viewFn: () => {
            return components.xbullPage;
          },
        }),
      },
      "/albedo": {
        OnEnter: (state: IState) => ({
          ...state,
          viewFn: () => {
            return components.albedoPage;
          },
        }),
      },
      "/freighter": {
        OnEnter: (state: IState) => ({
          ...state,
          viewFn: () => {
            return components.freighterPage;
          },
        }),
      },
    },
  },

  init: baseState,
  view: (state: IState) => state.viewFn(),

  node: document.getElementById("app"),
});
