import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component, f as each } from "../../chunks/index.js";
import "firebase/auth";
import { d as db, a as auth } from "../../chunks/config.js";
import { updateDoc, doc, getDocs, collection, getDoc } from "firebase/firestore";
const rarity = [
  "terre",
  "gravier",
  "pierre",
  "fer",
  "or",
  "fossile"
];
const SliderDown_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".slider-down.svelte-1fkwju{transition:all 1s ease}.hide.svelte-1fkwju{transform:translateY(-100%)}.display.svelte-1fkwju{transform:translateY(0%)}",
  map: null
};
const SliderDown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { display = false } = $$props;
  let { color = "bg-taupe" } = $$props;
  let { zIndex = "10" } = $$props;
  if ($$props.display === void 0 && $$bindings.display && display !== void 0)
    $$bindings.display(display);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0)
    $$bindings.zIndex(zIndex);
  $$result.css.add(css$1);
  return `<div class="${"slider-down fixed flex flex-col w-full h-screen overflow-auto " + escape(color, true) + " " + escape(display ? "display" : "hide", true) + " svelte-1fkwju"}" style="${"z-index:" + escape(zIndex, true) + ";"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
const Coins = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { playerCoins = 0 } = $$props;
  let { color = "bg-blanc" } = $$props;
  if ($$props.playerCoins === void 0 && $$bindings.playerCoins && playerCoins !== void 0)
    $$bindings.playerCoins(playerCoins);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  return `<div class="${"flex justify-center h-[3rem] w-[90%] mx-auto rounded-full items-center mt-[5rem] my-[1rem] shrink-0 " + escape(color, true)}"><p class="${"font-bold overflow-auto"}">${escape(playerCoins.toFixed(2))}\u20AC</p></div>`;
});
const Item$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { amount = 0 } = $$props;
  let { name = "" } = $$props;
  let { i = 1 } = $$props;
  if ($$props.amount === void 0 && $$bindings.amount && amount !== void 0)
    $$bindings.amount(amount);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.i === void 0 && $$bindings.i && i !== void 0)
    $$bindings.i(i);
  return `<div class="${"flex relative w-full h-[7rem] object-cover shrink-0 fade-in " + escape(i == 0 ? "mt-[6rem]" : "mt-1", true)}"><div><img src="${"/ressources/" + escape(name, true) + ".png"}"${add_attribute("alt", name, 0)} class="${"w-[4rem] h-[4rem] ml-2"}">
		<p class="${"flex justify-center items-center w-[4rem] h-[2rem] ml-2 font-bold text-xs overflow-auto"}">${escape(name.toUpperCase())}</p></div>

	<p class="${"flex justify-center items-center mx-auto mt-5 w-[70%] h-[2rem] rounded-full bg-blanc font-bold text-xs overflow-auto"}">${escape(amount)}</p></div>`;
});
const Inventory = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { playerRessources = {} } = $$props;
  let { playerCoins = 0 } = $$props;
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
  if ($$props.playerCoins === void 0 && $$bindings.playerCoins && playerCoins !== void 0)
    $$bindings.playerCoins(playerCoins);
  if ($$props.displayInventory === void 0 && $$bindings.displayInventory && displayInventory !== void 0)
    $$bindings.displayInventory(displayInventory);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (playerRessources) {
        sortInventory();
      }
    }
    $$rendered = `${validate_component(SliderDown, "SliderDown").$$render(
      $$result,
      {
        display: displayInventory,
        zIndex: 12,
        color: "bg-inventory"
      },
      {},
      {
        default: () => {
          return `${validate_component(Coins, "Coins").$$render(
            $$result,
            { playerCoins },
            {
              playerCoins: ($$value) => {
                playerCoins = $$value;
                $$settled = false;
              }
            },
            {}
          )}
	${each(Object.entries(sortedInventory), ([name, amount]) => {
            return `${validate_component(Item$1, "Item").$$render($$result, { name, amount }, {}, {})}`;
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const InventoryButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { playerRessources = {} } = $$props;
  let { playerCoins = 0 } = $$props;
  let htmlInventoryButton;
  let displayInventory = false;
  async function saveInventory() {
    await updateDoc(doc(db, "inventory", auth.currentUser.uid), {
      ressources: Object.assign({}, playerRessources)
    });
  }
  if ($$props.playerRessources === void 0 && $$bindings.playerRessources && playerRessources !== void 0)
    $$bindings.playerRessources(playerRessources);
  if ($$props.playerCoins === void 0 && $$bindings.playerCoins && playerCoins !== void 0)
    $$bindings.playerCoins(playerCoins);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (playerRessources && htmlInventoryButton) {
        saveInventory();
      }
    }
    $$rendered = `<div draggable="${"false"}" class="${"absolute right-[calc(50%-1.5rem)] top-5 w-[3rem] h-[3rem]"}" style="${"z-index:13;"}"${add_attribute("this", htmlInventoryButton, 0)}>${!displayInventory ? `<img draggable="${"false"}" src="${"/logo/inventory.png"}" alt="${"inventory logo"}">` : `<img draggable="${"false"}" src="${"/logo/inventory_cross.png"}" alt="${"inventory logo"}">`}</div>

${validate_component(Inventory, "Inventory").$$render(
      $$result,
      {
        playerRessources,
        playerCoins,
        displayInventory
      },
      {
        playerRessources: ($$value) => {
          playerRessources = $$value;
          $$settled = false;
        },
        playerCoins: ($$value) => {
          playerCoins = $$value;
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
    return `<div draggable="${"false"}" class="${"flex justify-center items-center m-auto w-[5rem] h-[5rem] rounded-full shadow-xl " + escape(playerCurrentTool == tool ? "bg-green-300" : "bg-taupe", true)}"><img draggable="${"false"}" src="${"/tools/" + escape(tool.toolName, true) + ".png"}"${add_attribute("alt", tool.toolName, 0)} class="${"object-cover w-full h-full"}">
		</div>`;
  })}</div>`;
});
const ressources = [
  [
    { toolFamily: "pelle", toolLevel: 1, health: 3, name: "terre", sell: 0.1, buy: 0.15 },
    { toolFamily: "pioche", toolLevel: 1, health: 12, name: "pierre", sell: 0.2, buy: 0.25 },
    { toolFamily: "pioche", toolLevel: 1, health: 28, name: "fer", sell: 1, buy: 1.5 },
    { toolFamily: "maillet&burin", toolLevel: 1, health: 40, name: "fossile", sell: 5, buy: 10 }
  ],
  [
    { toolFamily: "pelle", toolLevel: 3, health: 4, name: "gravier", sell: 0.12, buy: 0.17 },
    { toolFamily: "pioche", toolLevel: 1, health: 18, name: "pierre", sell: 0.2, buy: 0.25 },
    { toolFamily: "pioche", toolLevel: 3, health: 40, name: "or", sell: 2, buy: 3 },
    { toolFamily: "maillet&burin", toolLevel: 3, health: 40, name: "fossile", sell: 5, buy: 10 }
  ]
];
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
  return `<div draggable="${"false"}" class="${"relative w-full h-[12em] object-cover shadow-2xl"}"${add_attribute("this", htmlCube, 0)}><img draggable="${"false"}" src="${"/ressources/" + escape(cube.name, true) + ".png"}"${add_attribute("alt", cube.name, 0)} class="${"absolute w-full h-full"}">

	${breakingAnimation != 0 ? `<img draggable="${"false"}" src="${"/ressources/break" + escape(breakingAnimation, true) + ".png"}" alt="${"breaking animation"}" class="${"absolute w-full h-full"}">` : ``}</div>

<p draggable="${"false"}" class="${"flex justify-center items-center w-full h-[4rem] font-bold overflow-hidden text-center text-ellipsis whitespace-nowrap"}">${escape(cube.name.toUpperCase())}</p>`;
});
function generateCube(ressources2) {
  let cubeIndex = 0;
  let rand = Math.floor(Math.random() * 250);
  if (rand <= 120)
    cubeIndex = 0;
  if (rand > 120 && rand <= 215)
    cubeIndex = 1;
  if (rand > 215 && rand <= 245)
    cubeIndex = 2;
  if (rand > 245 && rand <= 249)
    cubeIndex = 3;
  return ressources2[cubeIndex];
}
const Ressources = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cubeHealth;
  let { playerRessources = {} } = $$props;
  let { playerCurrentTool = {} } = $$props;
  let { world } = $$props;
  let cube = generateCube(ressources[world]);
  let htmlCube = {};
  function breakCube() {
    if (!playerCurrentTool)
      return;
    if (cube.toolFamily != playerCurrentTool.toolFamily || cube.toolLevel > playerCurrentTool.toolLevel)
      return;
    cubeHealth = cubeHealth - playerCurrentTool.toolDamage;
    breakingAnimation();
    if (cubeHealth > 0)
      return;
    addToInventory(cube.name);
    cube = generateCube(ressources[world]);
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
    if (!playerRessources[ressource]) {
      playerRessources[ressource] = 1;
    } else {
      playerRessources[ressource]++;
    }
  }
  if ($$props.playerRessources === void 0 && $$bindings.playerRessources && playerRessources !== void 0)
    $$bindings.playerRessources(playerRessources);
  if ($$props.playerCurrentTool === void 0 && $$bindings.playerCurrentTool && playerCurrentTool !== void 0)
    $$bindings.playerCurrentTool(playerCurrentTool);
  if ($$props.world === void 0 && $$bindings.world && world !== void 0)
    $$bindings.world(world);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (world >= 0) {
        cube = generateCube(ressources[world]);
      }
    }
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
  let { playerCurrentTool = {} } = $$props;
  let { playerTools = {} } = $$props;
  if ($$props.playerCurrentTool === void 0 && $$bindings.playerCurrentTool && playerCurrentTool !== void 0)
    $$bindings.playerCurrentTool(playerCurrentTool);
  if ($$props.playerTools === void 0 && $$bindings.playerTools && playerTools !== void 0)
    $$bindings.playerTools(playerTools);
  return ``;
});
const Burger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onClick = () => {
  } } = $$props;
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  return `<div draggable="${"false"}" class="${"absolute top-5 left-3 h-[3rem] w-auto"}" style="${"z-index:21;"}">${`<img draggable="${"false"}" src="${"/logo/book.png"}" alt="${"book logo"}" class="${"h-full w-auto"}">`}</div>`;
});
const missions = [
  [
    { required: "pierre", amount: 125, reward: "pelle_en_pierre", toolLevel: 2, toolFamily: "pelle" },
    { required: "pierre", amount: 125, reward: "pioche_en_pierre", toolLevel: 2, toolFamily: "pioche" },
    { required: "pierre", amount: 125, reward: "maillet&burin_en_pierre", toolLevel: 2, toolFamily: "maillet&burin" }
  ],
  [
    { required: "fer", amount: 75, reward: "pelle_en_fer", toolLevel: 3, toolFamily: "pelle" },
    { required: "fer", amount: 75, reward: "pioche_en_fer", toolLevel: 3, toolFamily: "pioche" },
    { required: "fer", amount: 75, reward: "maillet&burin_en_fer", toolLevel: 3, toolFamily: "maillet&burin" }
  ],
  [
    { required: "or", amount: 150, reward: "pelle_en_or", toolLevel: 4, toolFamily: "pelle" },
    { required: "or", amount: 150, reward: "pioche_en_or", toolLevel: 4, toolFamily: "pioche" },
    { required: "or", amount: 150, reward: "maillet&burin_en_or", toolLevel: 4, toolFamily: "maillet&burin" }
  ]
];
const tools = [
  [
    { toolFamily: "pelle", toolLevel: 1, toolName: "pelle_en_bois", toolDamage: 1 },
    { toolFamily: "pioche", toolLevel: 1, toolName: "pioche_en_bois", toolDamage: 1 },
    { toolFamily: "maillet&burin", toolLevel: 1, toolName: "maillet&burin_en_bois", toolDamage: 1 }
  ],
  [
    { toolFamily: "pelle", toolLevel: 2, toolName: "pelle_en_pierre", toolDamage: 2 },
    { toolFamily: "pioche", toolLevel: 2, toolName: "pioche_en_pierre", toolDamage: 2 },
    { toolFamily: "maillet&burin", toolLevel: 2, toolName: "maillet&burin_en_pierre", toolDamage: 2 }
  ],
  [
    { toolFamily: "pelle", toolLevel: 3, toolName: "pelle_en_fer", toolDamage: 3 },
    { toolFamily: "pioche", toolLevel: 3, toolName: "pioche_en_fer", toolDamage: 3 },
    { toolFamily: "maillet&burin", toolLevel: 3, toolName: "maillet&burin_en_fer", toolDamage: 3 }
  ],
  [
    { toolFamily: "pelle", toolLevel: 4, toolName: "pelle_en_or", toolDamage: 4 },
    { toolFamily: "pioche", toolLevel: 4, toolName: "pioche_en_or", toolDamage: 4 },
    { toolFamily: "maillet&burin", toolLevel: 4, toolName: "maillet&burin_en_or", toolDamage: 4 }
  ]
];
const MenuComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onClick = () => {
  } } = $$props;
  let { text = "" } = $$props;
  let { i = 1 } = $$props;
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.i === void 0 && $$bindings.i && i !== void 0)
    $$bindings.i(i);
  return `<div class="${"flex mx-auto w-[90%] h-[4rem] bg-blanc border-2 border-gold rounded-lg shadow-lg " + escape(i == 0 ? "mt-[6rem]" : "mt-[1rem]", true)}"><h2 class="${"m-auto font-bold text-dark font-avocadoCake text-2xl"}">${escape(text)}</h2></div>`;
});
const Mission_svelte_svelte_type_style_lang = "";
const css = {
  code: ".translate-ratio.svelte-1rz5qte{transform:translateX(var(--ratio))}",
  map: null
};
const Mission = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ratio;
  let { playerInventory } = $$props;
  let { onClick = () => {
  } } = $$props;
  let { mission = {} } = $$props;
  let { i = 1 } = $$props;
  if ($$props.playerInventory === void 0 && $$bindings.playerInventory && playerInventory !== void 0)
    $$bindings.playerInventory(playerInventory);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  if ($$props.mission === void 0 && $$bindings.mission && mission !== void 0)
    $$bindings.mission(mission);
  if ($$props.i === void 0 && $$bindings.i && i !== void 0)
    $$bindings.i(i);
  $$result.css.add(css);
  ratio = playerInventory.ressources[mission.required] / mission.amount * 100;
  {
    if (ratio > 100)
      ratio = 100;
  }
  return `<div class="${"flex w-[90%] h-[6rem] mx-auto my-2 p-[0.5rem] fade-in " + escape(i == 0 ? "mt-[6rem]" : "mt-[1rem]", true) + " " + escape(ratio >= 100 ? "bg-green-400" : "bg-taupe", true)}"><div class="${"flex flex-col w-auto h-full m-auto"}"><img src="${"/ressources/" + escape(mission.required, true) + ".png"}"${add_attribute("alt", mission.required, 0)} class="${"w-auto h-[3rem] object-cover"}">
		<p class="${"flex justify-center items-center w-auto h-[2rem] font-bold text-xs"}">${escape(mission.required.toUpperCase())}</p></div>

	<div class="${"relative flex justify-center items-center w-[50%] h-[2rem] m-auto border-2 border-dark overflow-hidden bg-blanc"}"><p class="${"absolute mx-auto z-50 font-bold text-xs"}">${escape(playerInventory.ressources[mission.required] || 0)} / ${escape(mission.amount)}</p>
		<div class="${"absolute w-full h-full bg-green-300 translate-ratio svelte-1rz5qte"}" style="${"--ratio:calc(" + escape(ratio || 0, true) + "% - 100%);"}"></div></div>

	<div class="${"m-auto"}"><img src="${"/tools/" + escape(mission.reward, true) + ".png"}"${add_attribute("alt", mission.reward, 0)} class="${"w-auto h-[4rem] object-cover"}"></div>
</div>`;
});
const Retour = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { display } = $$props;
  if ($$props.display === void 0 && $$bindings.display && display !== void 0)
    $$bindings.display(display);
  return `<div class="${"fixed right-3 top-8 font-bold text-dark"}">RETOUR
</div>`;
});
const Missions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { playerInventory = {} } = $$props;
  let { displayMenu = false } = $$props;
  let displayMissions = false;
  let playerMissions = [];
  const getPlayerMissions = () => {
    playerMissions = [];
    playerInventory.tools.forEach((tool) => {
      if (!missions[tool.toolLevel - 1])
        return;
      let mission = missions[tool.toolLevel - 1].find((mission2) => {
        if (mission2.toolFamily == tool.toolFamily)
          return mission2;
      });
      playerMissions.push(mission);
    });
  };
  const validateMission = (mission) => {
    if (playerInventory.ressources[mission.required] < mission.amount)
      return;
    let playerMissionTool = playerInventory.tools.find((tool) => {
      if (tool.toolFamily == mission.toolFamily)
        return tool;
    });
    let rewardTool = tools[mission.toolLevel - 1].find((tool) => {
      if (tool.toolFamily == mission.toolFamily)
        return tool;
    });
    playerInventory.tools[playerInventory.tools.indexOf(playerMissionTool)] = rewardTool;
    playerInventory.ressources[mission.required] -= mission.amount;
    updateDoc(doc(db, "inventory", auth.currentUser.uid), {
      ressources: Object.assign({}, playerInventory.ressources),
      tools: playerInventory.tools
    }).then(() => {
      getPlayerMissions();
    });
  };
  if ($$props.playerInventory === void 0 && $$bindings.playerInventory && playerInventory !== void 0)
    $$bindings.playerInventory(playerInventory);
  if ($$props.displayMenu === void 0 && $$bindings.displayMenu && displayMenu !== void 0)
    $$bindings.displayMenu(displayMenu);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (!displayMenu)
        displayMissions = false;
    }
    {
      if (displayMissions == true)
        getPlayerMissions();
    }
    $$rendered = `${validate_component(MenuComponent, "MenuComponent").$$render(
      $$result,
      {
        onClick: () => {
          displayMissions = !displayMissions;
        },
        text: "Missions",
        i: 0
      },
      {},
      {}
    )}

${validate_component(SliderDown, "SliderDown").$$render(
      $$result,
      {
        display: displayMissions,
        zIndex: "40",
        color: "bg-blanc"
      },
      {},
      {
        default: () => {
          return `${validate_component(Retour, "Retour").$$render(
            $$result,
            { display: displayMissions },
            {
              display: ($$value) => {
                displayMissions = $$value;
                $$settled = false;
              }
            },
            {}
          )}

	${each(playerMissions, (mission, i) => {
            return `${validate_component(Mission, "Mission").$$render(
              $$result,
              {
                onClick: () => {
                  validateMission(mission);
                },
                mission,
                i,
                playerInventory
              },
              {
                playerInventory: ($$value) => {
                  playerInventory = $$value;
                  $$settled = false;
                }
              },
              {}
            )}`;
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Leaderboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { displayMenu = false } = $$props;
  let displayLeaderboard = false;
  let leaderboardData = [];
  const updateLeaderboard = () => {
    leaderboardData = [];
    getDocs(collection(db, "inventory")).then((snap) => {
      snap.forEach((document) => {
        getDoc(doc(db, "player", document.id)).then((player) => {
          leaderboardData = [
            ...leaderboardData,
            {
              coins: document.data().coins,
              name: player.data().name,
              id: document.id
            }
          ];
        });
      });
    });
  };
  if ($$props.displayMenu === void 0 && $$bindings.displayMenu && displayMenu !== void 0)
    $$bindings.displayMenu(displayMenu);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (!displayMenu)
        displayLeaderboard = false;
    }
    {
      if (leaderboardData) {
        leaderboardData.sort((a, b) => {
          return b.coins - a.coins;
        });
      }
    }
    {
      if (displayLeaderboard == true)
        updateLeaderboard();
    }
    $$rendered = `${validate_component(MenuComponent, "MenuComponent").$$render(
      $$result,
      {
        onClick: () => {
          displayLeaderboard = !displayLeaderboard;
        },
        text: "Leaderboard"
      },
      {},
      {}
    )}

${validate_component(SliderDown, "SliderDown").$$render(
      $$result,
      {
        display: displayLeaderboard,
        color: "bg-blanc"
      },
      {},
      {
        default: () => {
          return `${validate_component(Retour, "Retour").$$render(
            $$result,
            { display: displayLeaderboard },
            {
              display: ($$value) => {
                displayLeaderboard = $$value;
                $$settled = false;
              }
            },
            {}
          )}

	${each(leaderboardData, (player, i) => {
            return `<div class="${"flex items-center w-full h-8 fade-in shrink-0 " + escape(i == 0 ? "mt-[6rem]" : "mt-[1rem]", true) + " " + escape(
              player.id == auth.currentUser.uid ? "bg-green-300" : "bg-taupe",
              true
            )}"><p class="${"font-bold mx-2"}">${escape(i + 1)}</p>
			<p>${escape(player.name)}</p>
			<p class="${"ml-auto mr-2"}">${escape(player.coins.toFixed(2))}\u20AC</p>
		</div>`;
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const getPlayerToolPower = (playerTools) => {
  let toolPower = 0;
  playerTools.forEach((tool) => {
    toolPower += tool.toolLevel;
  });
  return (toolPower / 3).toFixed(2);
};
const Item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { playerInventory = {} } = $$props;
  let { ressource = {} } = $$props;
  let { displayShop = false } = $$props;
  let selector = "none";
  let quantity = 0;
  let max = 0;
  if ($$props.playerInventory === void 0 && $$bindings.playerInventory && playerInventory !== void 0)
    $$bindings.playerInventory(playerInventory);
  if ($$props.ressource === void 0 && $$bindings.ressource && ressource !== void 0)
    $$bindings.ressource(ressource);
  if ($$props.displayShop === void 0 && $$bindings.displayShop && displayShop !== void 0)
    $$bindings.displayShop(displayShop);
  {
    if (!displayShop) {
      selector = "none";
      quantity = 0;
    }
  }
  return `<div class="${"flex w-full h-auto my-2 p-[0.5rem] shrink-0 bg-creme fade-in overflow-hidden " + escape(selector != "none" ? "h-[10rem]" : "h-[6.5rem]", true)}" style="${"transition: all 0.3s ease"}"><div class="${"flex flex-col w-[4rem] h-[6rem] mx-auto"}"><img class="${"w-full h-auto object-cover"}" src="${"/ressources/" + escape(ressource == null ? void 0 : ressource.name, true) + ".png"}"${add_attribute("alt", ressource.name, 0)}>
		<p class="${"flex justify-center items-center w-full h-full text-center font-bold text-xs"}">${escape(ressource.name.toUpperCase())}</p></div>
	<div class="${"flex flex-col w-[70%] h-auto m-auto"}"><div class="${"flex w-full h-full mx-auto mb-[0.5rem] transition-all " + escape(selector != "none" ? "h-[2rem]" : "h-[5.5rem]", true)}"><button class="${"w-[45%] h-[2rem] m-auto rounded-full " + escape(selector == "buy" ? "bg-green-300" : "bg-slate-300", true)}">Acheter
			</button>
			<button class="${"w-[45%] h-[2rem] * m-auto rounded-full " + escape(selector == "sell" ? "bg-green-300" : "bg-slate-300", true)}">Vendre
			</button></div>

		<input class="${"w-[50%] h-auto m-auto mt-[2rem] bg-blanc text-center rounded-full outline-none transition-all " + escape(selector != "none" ? "opacity-100" : "opacity-0 hidden", true) + " " + escape(
    (quantity <= 0 || quantity > playerInventory.ressources[ressource.name] || !playerInventory.ressources[ressource.name]) && selector == "sell" ? "text-red-500" : "",
    true
  ) + " " + escape(
    (quantity <= 0 || playerInventory.coins < ressource.buy * quantity) && selector == "buy" ? "text-red-500" : "",
    true
  )}" type="${"number"}" name="${"amountNumber"}" id="${"amountNumber"}"${add_attribute("value", quantity, 0)}>
		<input class="${"w-auto h-[1.5rem] text-center rounded-full transition-all " + escape(selector != "none" ? "opacity-100" : "opacity-0 hidden", true)}" type="${"range"}" min="${"0"}"${add_attribute("max", max, 0)} step="${"1"}" name="${"amountRange"}" id="${"amountRange"}" placeholder="${"Quantit\xE9"}"${add_attribute("value", quantity, 0)}>

		<div class="${"flex items-center w-auto h-[2rem] font-bold text-sm transition-all " + escape(selector != "none" ? "opacity-100" : "opacity-0 hidden", true)}"><p>${escape(ressource[selector] || 0)}\u20AC</p>
			<p class="${"ml-auto "}">${escape((quantity * ressource[selector]).toFixed(2))}\u20AC
			</p></div></div></div>`;
});
const Shop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { playerInventory = {} } = $$props;
  let { playerCoins = 0 } = $$props;
  let { displayMenu = false } = $$props;
  let availableRessources = [];
  let sortedRessources = [];
  let displayShop = false;
  const sortShop = () => {
    sortedRessources = [];
    rarity.forEach((el) => {
      let item = availableRessources.find((ress) => {
        if (ress.name == el)
          return ress;
      });
      if (item)
        sortedRessources = [
          ...sortedRessources,
          availableRessources[availableRessources.indexOf(item)]
        ];
    });
  };
  if ($$props.playerInventory === void 0 && $$bindings.playerInventory && playerInventory !== void 0)
    $$bindings.playerInventory(playerInventory);
  if ($$props.playerCoins === void 0 && $$bindings.playerCoins && playerCoins !== void 0)
    $$bindings.playerCoins(playerCoins);
  if ($$props.displayMenu === void 0 && $$bindings.displayMenu && displayMenu !== void 0)
    $$bindings.displayMenu(displayMenu);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (!displayMenu)
        displayShop = false;
    }
    {
      if (playerInventory) {
        availableRessources = [];
        let playerToolPower = getPlayerToolPower(playerInventory.tools);
        ressources.forEach((group) => {
          group.forEach((ressource) => {
            if (playerToolPower >= ressource.toolLevel) {
              let exists = availableRessources.find((ress) => {
                if (ress.name == ressource.name)
                  return ress;
              });
              if (!exists)
                availableRessources = [...availableRessources, ressource];
            }
          });
        });
        sortShop();
      }
    }
    $$rendered = `${validate_component(MenuComponent, "MenuComponent").$$render(
      $$result,
      {
        onClick: () => {
          displayShop = !displayShop;
        },
        text: "Magasin"
      },
      {},
      {}
    )}

${validate_component(SliderDown, "SliderDown").$$render($$result, { display: displayShop, color: "bg-blanc" }, {}, {
      default: () => {
        return `${validate_component(Retour, "Retour").$$render(
          $$result,
          { display: displayShop },
          {
            display: ($$value) => {
              displayShop = $$value;
              $$settled = false;
            }
          },
          {}
        )}

	${validate_component(Coins, "Coins").$$render(
          $$result,
          { color: "bg-taupe", playerCoins },
          {
            playerCoins: ($$value) => {
              playerCoins = $$value;
              $$settled = false;
            }
          },
          {}
        )}
	${each(sortedRessources, (ressource) => {
          return `${validate_component(Item, "Item").$$render(
            $$result,
            { ressource, playerInventory, displayShop },
            {
              playerInventory: ($$value) => {
                playerInventory = $$value;
                $$settled = false;
              },
              displayShop: ($$value) => {
                displayShop = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        })}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { playerInventory = {} } = $$props;
  let { playerCoins = 0 } = $$props;
  let displayMenu = false;
  if ($$props.playerInventory === void 0 && $$bindings.playerInventory && playerInventory !== void 0)
    $$bindings.playerInventory(playerInventory);
  if ($$props.playerCoins === void 0 && $$bindings.playerCoins && playerCoins !== void 0)
    $$bindings.playerCoins(playerCoins);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Burger, "Burger").$$render(
      $$result,
      {
        onClick: () => {
          displayMenu = !displayMenu;
        }
      },
      {},
      {}
    )}

${validate_component(SliderDown, "SliderDown").$$render(
      $$result,
      {
        display: displayMenu,
        color: "bg-book",
        zIndex: "20"
      },
      {},
      {
        default: () => {
          return `${validate_component(Missions, "Missions").$$render(
            $$result,
            { displayMenu, playerInventory },
            {
              playerInventory: ($$value) => {
                playerInventory = $$value;
                $$settled = false;
              }
            },
            {}
          )}
	${validate_component(Shop, "Shop").$$render(
            $$result,
            {
              displayMenu,
              playerInventory,
              playerCoins
            },
            {
              playerInventory: ($$value) => {
                playerInventory = $$value;
                $$settled = false;
              },
              playerCoins: ($$value) => {
                playerCoins = $$value;
                $$settled = false;
              }
            },
            {}
          )}
	${validate_component(Leaderboard, "Leaderboard").$$render($$result, { displayMenu }, {}, {})}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const worlds = [
  { name: "surface", powerRequired: 0 },
  { name: "sous-sol", powerRequired: 3 }
];
const World = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { displayMap = false } = $$props;
  let { worldInfo = {} } = $$props;
  let { world = 0 } = $$props;
  let { i = 1 } = $$props;
  if ($$props.displayMap === void 0 && $$bindings.displayMap && displayMap !== void 0)
    $$bindings.displayMap(displayMap);
  if ($$props.worldInfo === void 0 && $$bindings.worldInfo && worldInfo !== void 0)
    $$bindings.worldInfo(worldInfo);
  if ($$props.world === void 0 && $$bindings.world && world !== void 0)
    $$bindings.world(world);
  if ($$props.i === void 0 && $$bindings.i && i !== void 0)
    $$bindings.i(i);
  return `<div class="${"flex flex-col w-full h-[12rem] shrink-0 p-1 fade-in " + escape(world == i ? "bg-green-300" : "bg-blanc ", true) + " " + escape(i == 0 ? "mt-[6rem]" : "mt-2", true)}"><img class="${"mx-auto w-[5rem] h-auto object-cover"}" src="${"/worlds/" + escape(worldInfo.name, true) + ".png"}"${add_attribute("alt", worldInfo.name, 0)}>
	<p class="${"mx-auto font-bold"}">${escape(worldInfo.name.toUpperCase())}</p>
	<div class="${"flex overflow-auto my-auto mx-auto"}">${each(ressources[i], (ressource) => {
    return `<div class="${"flex flex-col w-[5rem] h-auto"}"><img class="${"mx-auto w-[3rem] h-auto"}" src="${"/ressources/" + escape(ressource.name, true) + ".png"}"${add_attribute("alt", ressource.name, 0)}>
				<p class="${"mx-auto text-xs font-bold"}">${escape(ressource.name.toUpperCase())}</p>
			</div>`;
  })}</div></div>`;
});
const Map = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { playerTools = {} } = $$props;
  let { world = 0 } = $$props;
  let displayMap = false;
  let playerWorlds = [];
  if ($$props.playerTools === void 0 && $$bindings.playerTools && playerTools !== void 0)
    $$bindings.playerTools(playerTools);
  if ($$props.world === void 0 && $$bindings.world && world !== void 0)
    $$bindings.world(world);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (playerTools) {
        playerWorlds = [];
        let playerPower = getPlayerToolPower(playerTools);
        worlds.forEach((world2) => {
          if (playerPower >= world2.powerRequired)
            playerWorlds = [...playerWorlds, world2];
        });
      }
    }
    $$rendered = `<div draggable="${"false"}" class="${"absolute right-3 top-5 w-[3rem] h-[3rem]"}" style="${"z-index:11;"}">${!displayMap ? `<img draggable="${"false"}" src="${"/logo/inventory.png"}" alt="${"inventory logo"}">` : `<img draggable="${"false"}" src="${"/logo/inventory_cross.png"}" alt="${"inventory logo"}">`}</div>

${validate_component(SliderDown, "SliderDown").$$render(
      $$result,
      {
        display: displayMap,
        zIndex: 10,
        color: "bg-creme"
      },
      {},
      {
        default: () => {
          return `${each(playerWorlds, (worldInfo, i) => {
            return `${validate_component(World, "World").$$render(
              $$result,
              { worldInfo, i, displayMap, world },
              {
                displayMap: ($$value) => {
                  displayMap = $$value;
                  $$settled = false;
                },
                world: ($$value) => {
                  world = $$value;
                  $$settled = false;
                }
              },
              {}
            )}`;
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const WorldSelected = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { world = 0 } = $$props;
  if ($$props.world === void 0 && $$bindings.world && world !== void 0)
    $$bindings.world(world);
  return `<p class="${"flex justify-center items-center absolute bottom-[8rem] left-[calc(50%-45%)] w-[90%] h-[2rem] rounded-full shadow-xl bg-creme font-bold text-sm"}">${escape(world)} - ${escape(worlds[world].name.toUpperCase())}</p>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let player;
  let world;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    player = {};
    world = 0;
    $$rendered = `<div class="${"relative main flex flex-col w-full min-h-screen bg-blanc"}">${(player == null ? void 0 : player.inventory) ? `${validate_component(Menu, "Menu").$$render(
      $$result,
      {
        playerInventory: player.inventory,
        playerCoins: player.inventory.coins
      },
      {
        playerInventory: ($$value) => {
          player.inventory = $$value;
          $$settled = false;
        },
        playerCoins: ($$value) => {
          player.inventory.coins = $$value;
          $$settled = false;
        }
      },
      {}
    )}
		${validate_component(InventoryButton, "InventoryButton").$$render(
      $$result,
      {
        playerRessources: player.inventory.ressources,
        playerCoins: player.inventory.coins
      },
      {
        playerRessources: ($$value) => {
          player.inventory.ressources = $$value;
          $$settled = false;
        },
        playerCoins: ($$value) => {
          player.inventory.coins = $$value;
          $$settled = false;
        }
      },
      {}
    )}
		${validate_component(Map, "Map").$$render(
      $$result,
      {
        playerTools: player.inventory.tools,
        world
      },
      {
        playerTools: ($$value) => {
          player.inventory.tools = $$value;
          $$settled = false;
        },
        world: ($$value) => {
          world = $$value;
          $$settled = false;
        }
      },
      {}
    )}
		${validate_component(Ressources, "Ressources").$$render(
      $$result,
      {
        playerRessources: player.inventory.ressources,
        playerCurrentTool: player.currentTool,
        world
      },
      {
        playerRessources: ($$value) => {
          player.inventory.ressources = $$value;
          $$settled = false;
        },
        playerCurrentTool: ($$value) => {
          player.currentTool = $$value;
          $$settled = false;
        },
        world: ($$value) => {
          world = $$value;
          $$settled = false;
        }
      },
      {}
    )}
		${validate_component(WorldSelected, "WorldSelected").$$render(
      $$result,
      { world },
      {
        world: ($$value) => {
          world = $$value;
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
    )}` : ``}</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
