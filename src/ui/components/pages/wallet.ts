import html from "hyperlit";

const walletPage = (props: { wallet: string; publicKey: string }) =>
  html`<div>${props.wallet} publicKey: ${props.publicKey}</div>`;

export default walletPage;
