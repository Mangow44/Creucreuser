import { c as create_ssr_component, d as each, e as escape, f as add_attribute, v as validate_component } from "../../chunks/index.js";
const template = {
  coins: 0,
  tools: ["pelle", "pioche", "marteau", "foreuse"],
  currentTool: null
};
const cubes = [
  [
    { tool: "pelle", health: 1, name: "terre", reward: 1e-3 },
    { tool: "pioche", health: 2, name: "pierre", reward: 5e-3 },
    { tool: "marteau", health: 3, name: "fossile", reward: 0.01 },
    { tool: "foreuse", health: 5, name: "fer", reward: 0.1 }
  ]
];
const ToolsBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { player = {} } = $$props;
  if ($$props.player === void 0 && $$bindings.player && player !== void 0)
    $$bindings.player(player);
  return `<div class="${"flex mt-auto w-full h-[6rem] box-content"}">${each(player.tools, (tool) => {
    return `<div class="${"flex justify-center items-center m-auto w-[5rem] h-[5rem] rounded-full shadow-xl " + escape(player.currentTool == tool ? "bg-green-300" : "bg-taupe", true)}"><img src="${"/tools/" + escape(tool, true) + ".png"}"${add_attribute("alt", tool, 0)} class="${"object-cover w-full h-full"}">
		</div>`;
  })}</div>`;
});
const Coins = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fixedCoins;
  let { coins = 0 } = $$props;
  if ($$props.coins === void 0 && $$bindings.coins && coins !== void 0)
    $$bindings.coins(coins);
  fixedCoins = coins.toFixed(4);
  return `<div class="${"absolute right-5 top-5"}">${escape(fixedCoins)}\u20AC
</div>`;
});
function getCube(array) {
  let index = 0;
  let rand = Math.floor(Math.random() * 100);
  if (rand <= 50)
    index = 0;
  if (rand > 50 && rand <= 80)
    index = 1;
  if (rand > 80 && rand <= 95)
    index = 2;
  if (rand > 95 && rand <= 100)
    index = 3;
  return array[index];
}
const Cubes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cubeHealth;
  let { cubes: cubes2 = [] } = $$props;
  let { player = {} } = $$props;
  let cube = getCube(cubes2[0]);
  if ($$props.cubes === void 0 && $$bindings.cubes && cubes2 !== void 0)
    $$bindings.cubes(cubes2);
  if ($$props.player === void 0 && $$bindings.player && player !== void 0)
    $$bindings.player(player);
  cubeHealth = cube.health;
  return `<div class="${"mt-auto mx-auto w-[12rem] h-[14rem]"}"><img src="${"/cubes/" + escape(cube.name, true) + escape(cubeHealth, true) + ".png"}"${add_attribute("alt", cube.name, 0)} class="${"object-cover w-full h-[12em] shadow-2xl"}">
	<p class="${"w-full h-[2rem] overflow-hidden text-center text-ellipsis whitespace-nowrap"}">${escape(cube.name)}</p></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let player;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    player = template;
    $$rendered = `<div class="${"relative main flex flex-col w-full min-h-screen bg-blanc"}">${validate_component(Coins, "Coins").$$render($$result, { coins: player.coins }, {}, {})}
	${validate_component(Cubes, "Cubes").$$render(
      $$result,
      { cubes, player },
      {
        player: ($$value) => {
          player = $$value;
          $$settled = false;
        }
      },
      {}
    )}
	${validate_component(ToolsBar, "ToolsBar").$$render(
      $$result,
      { player },
      {
        player: ($$value) => {
          player = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
