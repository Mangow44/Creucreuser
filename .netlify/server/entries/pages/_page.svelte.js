import { c as create_ssr_component, e as escape, d as each, f as add_attribute, v as validate_component } from "../../chunks/index.js";
const template = {
  coins: 0,
  tools: [
    { toolFamily: "pelle", toolLevel: 1, toolName: "pelle_en_pierre", toolDamage: 1 },
    { toolFamily: "pioche", toolLevel: 1, toolName: "pioche_en_pierre", toolDamage: 1 },
    { toolFamily: "maillet&burin", toolLevel: 1, toolName: "maillet&burin_en_pierre", toolDamage: 1 }
  ],
  currentTool: null
};
const inventory = {};
const ressources = [
  [
    { toolFamily: "pelle", toolLevel: 1, health: 2, name: "terre" },
    { toolFamily: "pioche", toolLevel: 1, health: 10, name: "pierre" },
    { toolFamily: "pioche", toolLevel: 1, health: 15, name: "fer" },
    { toolFamily: "maillet&burin", toolLevel: 1, health: 20, name: "fossile" }
  ]
];
const Coins = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fixedCoins;
  let { coins = 0 } = $$props;
  if ($$props.coins === void 0 && $$bindings.coins && coins !== void 0)
    $$bindings.coins(coins);
  fixedCoins = coins.toFixed(4);
  return `<div class="${"absolute right-5 top-5"}">${escape(fixedCoins)}\u20AC
</div>`;
});
const Inventory_svelte_svelte_type_style_lang = "";
const css = {
  code: ".inventory.svelte-1tkdetm{transition:all 1s ease}.hideInventory.svelte-1tkdetm{transform:translateY(-100%)}.displayInventory.svelte-1tkdetm{transform:translateY(0%)}",
  map: null
};
const Inventory = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { playerInventory = {} } = $$props;
  let { displayInventory = false } = $$props;
  if ($$props.playerInventory === void 0 && $$bindings.playerInventory && playerInventory !== void 0)
    $$bindings.playerInventory(playerInventory);
  if ($$props.displayInventory === void 0 && $$bindings.displayInventory && displayInventory !== void 0)
    $$bindings.displayInventory(displayInventory);
  $$result.css.add(css);
  return `<div class="${"flex w-full h-screen fixed bg-dark-taupe z-10 inventory " + escape(displayInventory ? "displayInventory" : "hideInventory", true) + " svelte-1tkdetm"}"><div class="${"flex flex-wrap mt-auto w-full h-[90%] gap-1"}">${each(Object.entries(playerInventory), ([ressource, amount]) => {
    return `<div class="${"relative m-auto w-[8rem] h-[11rem] object-cover"}"><img src="${"/ressources/" + escape(ressource, true) + ".png"}"${add_attribute("alt", ressource, 0)} class="${"w-[8rem] h-[8rem]"}">
				<p class="${"absolute flex justify-center items-center rounded-full bg-blanc w-[3rem] h-[3rem] font-bold right-[calc(50%-1.5rem)] bottom-[4rem] opacity-80 overflow-auto"}">${escape(amount)}</p>
				<p class="${"flex justify-center items-center w-[8rem] h-[3rem] font-bold overflow-auto"}">${escape(ressource.toUpperCase())}</p>
			</div>`;
  })}</div>
</div>`;
});
const InventoryButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { playerInventory = {} } = $$props;
  let htmlInventoryButton;
  let displayInventory = false;
  let init = false;
  let animateInventory = () => {
    htmlInventoryButton.classList.add("bouncing");
    setTimeout(
      () => {
        htmlInventoryButton.classList.remove("bouncing");
      },
      100
    );
  };
  if ($$props.playerInventory === void 0 && $$bindings.playerInventory && playerInventory !== void 0)
    $$bindings.playerInventory(playerInventory);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (playerInventory && htmlInventoryButton) {
        if (!init) {
          init = true;
        } else {
          animateInventory();
        }
      }
    }
    $$rendered = `<div class="${"absolute right-[calc(50%-1.5rem)] top-5 w-[3rem] h-[3rem z-20"}"${add_attribute("this", htmlInventoryButton, 0)}>${!displayInventory ? `<img src="${"/logo/inventory.png"}" alt="${"inventory logo"}">` : `<img src="${"/logo/inventory_cross.png"}" alt="${"inventory logo"}">`}</div>

${validate_component(Inventory, "Inventory").$$render(
      $$result,
      { playerInventory, displayInventory },
      {
        playerInventory: ($$value) => {
          playerInventory = $$value;
          $$settled = false;
        },
        displayInventory: ($$value) => {
          displayInventory = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const ToolsBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { player = {} } = $$props;
  if ($$props.player === void 0 && $$bindings.player && player !== void 0)
    $$bindings.player(player);
  return `<div class="${"flex mt-auto w-full h-[6rem] box-content"}">${each(player.tools, (tool) => {
    return `<div class="${"flex justify-center items-center m-auto w-[5rem] h-[5rem] rounded-full shadow-xl " + escape(player.currentTool == tool ? "bg-green-300" : "bg-taupe", true)}"><img src="${"/tools/" + escape(tool.toolName, true) + ".png"}"${add_attribute("alt", tool.toolName, 0)} class="${"object-cover w-full h-full"}">
		</div>`;
  })}</div>`;
});
const Cube = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cube = {} } = $$props;
  let { cubeHealth } = $$props;
  let { htmlCube } = $$props;
  let { breakCube = () => {
  } } = $$props;
  let breakingAnimation = 0;
  if ($$props.cube === void 0 && $$bindings.cube && cube !== void 0)
    $$bindings.cube(cube);
  if ($$props.cubeHealth === void 0 && $$bindings.cubeHealth && cubeHealth !== void 0)
    $$bindings.cubeHealth(cubeHealth);
  if ($$props.htmlCube === void 0 && $$bindings.htmlCube && htmlCube !== void 0)
    $$bindings.htmlCube(htmlCube);
  if ($$props.breakCube === void 0 && $$bindings.breakCube && breakCube !== void 0)
    $$bindings.breakCube(breakCube);
  {
    if (cubeHealth <= cube.health / 4) {
      breakingAnimation = 3;
    } else if (cubeHealth <= cube.health / 2.3) {
      breakingAnimation = 2;
    } else if (cubeHealth <= cube.health / 1.1) {
      breakingAnimation = 1;
    } else {
      breakingAnimation = 0;
    }
  }
  return `<div class="${"relative w-full h-[12em] object-cover shadow-2xl"}"${add_attribute("this", htmlCube, 0)}><img src="${"/ressources/" + escape(cube.name, true) + ".png"}"${add_attribute("alt", cube.name, 0)} class="${"absolute w-full h-full"}">

	${breakingAnimation != 0 ? `<img src="${"/ressources/break" + escape(breakingAnimation, true) + ".png"}" alt="${"breaking animation"}" class="${"absolute w-full h-full"}">` : ``}</div>

<p class="${"flex justify-center items-center w-full h-[4rem] font-bold overflow-hidden text-center text-ellipsis whitespace-nowrap"}">${escape(cube.name.toUpperCase())}</p>`;
});
function generateCube(array) {
  let index = 0;
  let rand = Math.floor(Math.random() * 250);
  if (rand <= 120)
    index = 0;
  if (rand > 120 && rand <= 215)
    index = 1;
  if (rand > 215 && rand <= 245)
    index = 2;
  if (rand > 245 && rand <= 249)
    index = 3;
  return array[index];
}
const Ressources = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cubeHealth;
  let { ressources: ressources2 = [] } = $$props;
  let { player = {} } = $$props;
  let { playerInventory = {} } = $$props;
  let cube = generateCube(ressources2[0]);
  let htmlCube;
  function breakCube() {
    if (!player.currentTool)
      return;
    if (cube.toolFamily == player.currentTool.toolFamily && cube.toolLevel <= player.currentTool.toolLevel) {
      cubeHealth = cubeHealth - player.currentTool.toolDamage;
      breakingAnimation();
      if (cubeHealth > 0)
        return;
      addToInventory(cube.name);
      cube = generateCube(ressources2[0]);
    }
  }
  function breakingAnimation() {
    htmlCube.classList.add("bouncing");
    setTimeout(
      () => {
        htmlCube.classList.remove("bouncing");
      },
      100
    );
  }
  function addToInventory(ressource) {
    if (!playerInventory[ressource]) {
      playerInventory[ressource] = 1;
    } else {
      playerInventory[ressource]++;
    }
  }
  if ($$props.ressources === void 0 && $$bindings.ressources && ressources2 !== void 0)
    $$bindings.ressources(ressources2);
  if ($$props.player === void 0 && $$bindings.player && player !== void 0)
    $$bindings.player(player);
  if ($$props.playerInventory === void 0 && $$bindings.playerInventory && playerInventory !== void 0)
    $$bindings.playerInventory(playerInventory);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    cubeHealth = cube.health;
    $$rendered = `<div class="${"mt-auto mx-auto w-[12rem] h-[16rem]"}">${validate_component(Cube, "Cube").$$render(
      $$result,
      {
        breakCube: () => {
          breakCube();
        },
        cube,
        cubeHealth,
        htmlCube
      },
      {
        cube: ($$value) => {
          cube = $$value;
          $$settled = false;
        },
        cubeHealth: ($$value) => {
          cubeHealth = $$value;
          $$settled = false;
        },
        htmlCube: ($$value) => {
          htmlCube = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const Inputs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { player = {} } = $$props;
  if ($$props.player === void 0 && $$bindings.player && player !== void 0)
    $$bindings.player(player);
  return ``;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let player;
  let playerInventory = inventory;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    player = template;
    $$rendered = `<div class="${"relative main flex flex-col w-full min-h-screen bg-blanc"}">${validate_component(Coins, "Coins").$$render($$result, { coins: player.coins }, {}, {})}
	${validate_component(InventoryButton, "InventoryButton").$$render(
      $$result,
      { playerInventory },
      {
        playerInventory: ($$value) => {
          playerInventory = $$value;
          $$settled = false;
        }
      },
      {}
    )}
	${validate_component(Ressources, "Ressources").$$render(
      $$result,
      { ressources, player, playerInventory },
      {
        player: ($$value) => {
          player = $$value;
          $$settled = false;
        },
        playerInventory: ($$value) => {
          playerInventory = $$value;
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
    )}
	${validate_component(Inputs, "Inputs").$$render(
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
