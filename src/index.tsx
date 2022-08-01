import { Toggle } from "decky-frontend-lib";
import { ReactElement, VFC } from "react";
import { SMM } from "@crankshaft/types";

// interface AddMethodArgs {
//   left: number;
//   right: number;
// }

export const load = (smm: SMM) => {
  console.log("Decky plugin loaded");

  const render = async (smm: SMM): Promise<ReactElement> => {
    return (
      <div id="decky-root">
        <div>Hello world!</div>
        <Toggle value={false} />
      </div>
    );
  };

  smm.MenuManager.addMenuItem({
    id: "decky-plugin",
    label: "Decky",
    fontSize: 16,
    render: async (smm: SMM, root: HTMLElement) => {
      //@ts-ignore
      SP_REACTDOM.render(await render(smm), root);
    },
  });
};

export const unload = (smm: SMM) => {
  console.info("Decky plugin unloaded!");
  smm.MenuManager.removeMenuItem("decky-plugin");
};
