import { effects } from "@mrbarrysoftware/hyperapp-router";

const GoToHref = (state: any, { href }: any) => [
  state,
  effects.Navigate({ href }), //where href is a string, like `/route/path/here`
];
