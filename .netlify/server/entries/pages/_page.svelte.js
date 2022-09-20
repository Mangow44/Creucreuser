import { c as create_ssr_component, e as escape, d as add_attribute, f as each, v as validate_component } from "../../chunks/index.js";
import "firebase/auth";
import { d as db, a as auth } from "../../chunks/config.js";
import { updateDoc, doc } from "firebase/firestore";
const template = {
  currentTool: null,
  inventory: {}
};
const ressources = [
  [
    { toolFamily: "pelle", toolLevel: 1, health: 2, name: "terre" },
    { toolFamily: "pioche", toolLevel: 1, health: 10, name: "pierre" },
    { toolFamily: "pioche", toolLevel: 1, health: 15, name: "fer" },
    { toolFamily: "maillet&burin", toolLevel: 1, health: 20, name: "fossile" }
  ]
];
const rarity = [
  "terre",
  "pierre",
  "fer",
  "fossile"
];
const Item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { amount = 0 } = $$props;
  let { name = "" } = $$props;
  if ($$props.amount === void 0 && $$bindings.amount && amount !== void 0)
    $$bindings.amount(amount);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `<div class="${"flex relative w-full h-[7rem] my-1 object-cover"}"><div><img src="${"/ressources/" + escape(name, true) + ".png"}"${add_attribute("alt", name, 0)} class="${"w-[4rem] h-[4rem] ml-2"}">
		<p class="${"flex justify-center items-center w-[4rem] h-[2rem] ml-2 font-bold text-xs overflow-auto"}">${escape(name.toUpperCase())}</p></div>

	<p class="${"flex justify-center items-center mx-auto mt-5 w-[70%] h-[2rem] rounded-full bg-blanc opacity-80 font-bold text-xs overflow-auto"}">${escape(amount)}</p></div>`;
});
const Inventory_svelte_svelte_type_style_lang = "";
const css = {
  code: ".inventory.svelte-1tkdetm{transition:all 1s ease}.hideInventory.svelte-1tkdetm{transform:translateY(-100%)}.displayInventory.svelte-1tkdetm{transform:translateY(0%)}",
  map: null
};
const Inventory = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { playerRessources = {} } = $$props;
  let { displayInventory = false } = $$props;
  let sortedInventory = [];
  const sortInventory = () => {
    sortedInventory = [];
    rarity.forEach((el) => {
      if (playerRessources[el]) {
        sortedInventory[el] = playerRessources[el];
      }
    });
  };
  if ($$props.playerRessources === void 0 && $$bindings.playerRessources && playerRessources !== void 0)
    $$bindings.playerRessources(playerRessources);
  if ($$props.displayInventory === void 0 && $$bindings.displayInventory && displayInventory !== void 0)
    $$bindings.displayInventory(displayInventory);
  $$result.css.add(css);
  {
    if (playerRessources) {
      sortInventory();
    }
  }
  return `<div class="${"flex w-full h-screen fixed bg-dark-taupe z-10 inventory " + escape(displayInventory ? "displayInventory" : "hideInventory", true) + " svelte-1tkdetm"}"><div class="${"mt-auto w-full h-[90%] overflow-auto"}">${each(Object.entries(sortedInventory), ([name, amount]) => {
    return `${validate_component(Item, "Item").$$render($$result, { name, amount }, {}, {})}`;
  })}</div>
</div>`;
});
const InventoryButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { playerRessources = {} } = $$props;
  let htmlInventoryButton;
  let displayInventory = false;
  async function saveInventory() {
    await updateDoc(doc(db, "inventory", auth.currentUser.uid), {
      ressources: Object.assign({}, playerRessources)
    });
  }
  if ($$props.playerRessources === void 0 && $$bindings.playerRessources && playerRessources !== void 0)
    $$bindings.playerRessources(playerRessources);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (playerRessources && htmlInventoryButton) {
        saveInventory();
      }
    }
    $$rendered = `<div class="${"absolute right-[calc(50%-1.5rem)] top-5 w-[3rem] h-[3rem z-20"}"${add_attribute("this", htmlInventoryButton, 0)}>${!displayInventory ? `<img src="${"/logo/inventory.png"}" alt="${"inventory logo"}">` : `<img src="${"/logo/inventory_cross.png"}" alt="${"inventory logo"}">`}</div>

${validate_component(Inventory, "Inventory").$$render(
      $$result,
      { playerRessources, displayInventory },
      {
        playerRessources: ($$value) => {
          playerRessources = $$value;
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
  let { playerTools = [] } = $$props;
  let { playerCurrentTool = {} } = $$props;
  if ($$props.playerTools === void 0 && $$bindings.playerTools && playerTools !== void 0)
    $$bindings.playerTools(playerTools);
  if ($$props.playerCurrentTool === void 0 && $$bindings.playerCurrentTool && playerCurrentTool !== void 0)
    $$bindings.playerCurrentTool(playerCurrentTool);
  return `<div class="${"flex mt-auto w-full h-[6rem] box-content"}">${each(playerTools, (tool) => {
    return `<div class="${"flex justify-center items-center m-auto w-[5rem] h-[5rem] rounded-full shadow-xl " + escape(playerCurrentTool == tool ? "bg-green-300" : "bg-taupe", true)}"><img src="${"/tools/" + escape(tool.toolName, true) + ".png"}"${add_attribute("alt", tool.toolName, 0)} class="${"object-cover w-full h-full"}">
		</div>`;
  })}</div>`;
});
const Cube = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cube = {} } = $$props;
  let { cubeHealth } = $$props;
  let { htmlCube = {} } = $$props;
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
  let cube = generateCube(ressources2[0]);
  let htmlCube = {};
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
    if (!player.inventory.ressources[ressource]) {
      player.inventory.ressources[ressource] = 1;
    } else {
      player.inventory.ressources[ressource]++;
    }
  }
  if ($$props.ressources === void 0 && $$bindings.ressources && ressources2 !== void 0)
    $$bindings.ressources(ressources2);
  if ($$props.player === void 0 && $$bindings.player && player !== void 0)
    $$bindings.player(player);
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
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    player = template;
    $$rendered = `<div class="${"relative main flex flex-col w-full min-h-screen bg-blanc"}">${player.inventory.ressources ? `${validate_component(InventoryButton, "InventoryButton").$$render(
      $$result,
      {
        playerRessources: player.inventory.ressources
      },
      {
        playerRessources: ($$value) => {
          player.inventory.ressources = $$value;
          $$settled = false;
        }
      },
      {}
    )}
		${validate_component(Ressources, "Ressources").$$render(
      $$result,
      { ressources, player },
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
      {
        playerTools: player.inventory.tools,
        playerCurrentTool: player.currentTool
      },
      {
        playerTools: ($$value) => {
          player.inventory.tools = $$value;
          $$settled = false;
        },
        playerCurrentTool: ($$value) => {
          player.currentTool = $$value;
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
    )}` : ``}</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
